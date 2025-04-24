document.addEventListener('DOMContentLoaded', (event) => {
    // Language switching logic
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const langButtons = document.querySelectorAll('.lang-btn');

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update active state of language buttons
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all translations
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = key.split('.').reduce((obj, i) => obj[i], translations[lang]);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            const translation = key.split('.').reduce((obj, i) => obj[i], translations[lang]);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Dispatch event for page-specific language updates
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    // Initialize language
    updateLanguage(currentLang);

    // Add language switch event listeners
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            if (newLang !== currentLang) {
                updateLanguage(newLang);
            }
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.tab-button');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    // If we're on the index page with no specific page, highlight the introduction link
    if (currentPage === '' || currentPage === 'index.html') {
        document.getElementById('introduction-link').classList.add('active');
    }

    // Initialize Prism highlighting
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.dataset.clipboardText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalIcon = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                }, 2000);
            });
        });
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.mobile-backdrop');
    
    function toggleMobileMenu() {
        sidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }
    
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    backdrop.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
});

// Game categories functionality
async function fetchGameCategories() {
    const selectWrapper = document.querySelector('.select-wrapper');
    const dropdown = document.querySelector('#gameSelect');
    const loadingSpinner = document.querySelector('#loadingSpinner');
    const gameInfo = document.querySelector('#selectedGameInfo');
    
    // Initialize Select2 immediately with placeholder
    $(dropdown).select2({
        placeholder: 'Search for a game...',
        allowClear: true,
        width: '100%',
        dropdownParent: selectWrapper,
        templateResult: formatGameOption,
        templateSelection: formatGameSelection,
        escapeMarkup: function(markup) {
            return markup;
        }
    });
    
    try {
        loadingSpinner.style.display = 'block';
        const response = await fetch('https://api-v2.medal.tv/categories');
        const data = await response.json();
        
        // Filter and sort game categories
        const gameCategories = data
            .filter(category => category.isGame)
            .sort((a, b) => (b.categoryFollowers || 0) - (a.categoryFollowers || 0));
        
        // Format data for Select2
        const formattedData = [{
            id: '',
            text: 'Search for a game...'
        }, ...gameCategories.map(game => ({
            id: game.categoryId,
            text: game.categoryName,
            thumbnail: game.categoryThumbnail || game.icon || '',
            followers: game.categoryFollowers || 0,
            clips: game.publishedClipCount || 0
        }))];

        // Update Select2 data
        $(dropdown).empty().select2({
            data: formattedData,
            placeholder: 'Search for a game...',
            allowClear: true,
            width: '100%',
            dropdownParent: selectWrapper,
            templateResult: formatGameOption,
            templateSelection: formatGameSelection,
            escapeMarkup: function(markup) {
                return markup;
            }
        }).val(null).trigger('change');

        // Handle selection change
        $(dropdown).on('select2:select', function(e) {
            updateGameInfo(e.params.data);
        }).on('select2:unselect', function() {
            const gameInfo = document.querySelector('#selectedGameInfo');
            gameInfo.style.display = 'none';
        });

    } catch (error) {
        console.error('Error fetching game categories:', error);
        dropdown.innerHTML = '<option value="">Error loading games</option>';
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// Format game option in dropdown
function formatGameOption(game) {
    if (!game.id) return game.text;
    
    return `
        <div class="select2-game-option">
            <span class="select2-game-name">${game.text}</span>
        </div>
    `;
}

// Format selected game
function formatGameSelection(game) {
    if (!game.id) return game.text;
    
    return `
        <div class="select2-game-selection">
            ${game.thumbnail ? `<img src="${game.thumbnail}" class="select2-game-thumbnail" alt="${game.text}">` : ''}
            <span class="select2-game-name">${game.text}</span>
        </div>
    `;
}

// Handle form submission and API key generation
async function handleRegistration(gameId, appName, appUrl) {
    const apiEndpoint = 'https://register-thirdpartyapp.medal.workers.dev/';
    
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryId: gameId,
                appName: appName,
                appUrl: appUrl
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Update game info display
function updateGameInfo(selectedGame) {
    const gameInfo = document.querySelector('#selectedGameInfo');
    const registrationForm = document.querySelector('#registrationForm');
    const apiKeyContainer = document.querySelector('#apiKeyContainer');
    
    if (!selectedGame.id) {
        gameInfo.style.display = 'none';
        return;
    }

    // Update game info display
    document.querySelector('#gameImage').src = selectedGame.thumbnail;
    document.querySelector('#gameImage').alt = selectedGame.text;
    document.querySelector('#gameName').textContent = selectedGame.text;
    document.querySelector('#followers').textContent = parseInt(selectedGame.followers).toLocaleString();
    document.querySelector('#clips').textContent = parseInt(selectedGame.clips).toLocaleString();
    
    // Show game info and form
    gameInfo.style.display = 'block';
    registrationForm.style.display = 'block';
    apiKeyContainer.style.display = 'none';

    // Update input placeholders with translations
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        const translation = key.split('.').reduce((obj, i) => obj[i], translations[currentLang]);
        if (translation) {
            element.placeholder = translation;
        }
    });

    // Handle form submission
    registrationForm.onsubmit = async (e) => {
        e.preventDefault();
        const errorMessage = document.getElementById('errorMessage');
        const apiKeyValue = document.getElementById('apiKeyValue');
        
        try {
            const appName = document.getElementById('appName').value;
            const appUrl = document.getElementById('appUrl').value;

            // URL validation with translated error message
            if (!appUrl.match(/^https?:\/\/.+/)) {
                const urlErrorMsg = translations[currentLang].apiKey.validationUrlRequired;
                errorMessage.textContent = urlErrorMsg;
                errorMessage.style.display = 'block';
                return;
            }

            const result = await handleRegistration(selectedGame.id, appName, appUrl);
            
            if (result.genApiKey) {
                apiKeyValue.textContent = result.genApiKey;
                registrationForm.style.display = 'none';
                apiKeyContainer.style.display = 'block';
                errorMessage.style.display = 'none';
            } else {
                throw new Error('No API key received');
            }
        } catch (error) {
            const genericError = translations[currentLang].apiKey.errorGeneric;
            errorMessage.textContent = genericError;
            errorMessage.style.display = 'block';
        }
    };

    // Handle copy button
    const copyKeyBtn = document.getElementById('copyKeyBtn');
    copyKeyBtn.onclick = async () => {
        const apiKeyValue = document.getElementById('apiKeyValue');
        await navigator.clipboard.writeText(apiKeyValue.textContent);
        
        const originalText = copyKeyBtn.querySelector('span').textContent;
        const copiedText = translations[currentLang].apiKey.copied;
        copyKeyBtn.querySelector('span').textContent = copiedText;
        
        setTimeout(() => {
            copyKeyBtn.querySelector('span').textContent = originalText;
        }, 2000);
    };
} 