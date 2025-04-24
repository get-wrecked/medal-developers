const translations = {
    en: {
        nav: {
            gettingStarted: "Getting Started",
            overview: "Overview",
            getPublicKey: "Get Public Key",
            endpoints: "Endpoints",
            sendEvents: "Send Events",
            sendContext: "Send Context"
        },
        overview: {
            title: "Medal - Local Game API",
            getStarted: "Get Started in 2 Steps",
            step1: {
                title: "Claim Your API Key",
                description: "Register your app and get your public API key to start integrating with Medal's auto-clipping features.",
                cta: "Get Your Key"
            },
            step2: {
                title: "Send Game Events",
                description: "Start sending game events to trigger auto-clips when exciting moments happen in your game.",
                cta: "View Events API"
            },
            whyIntegrate: "Why integrate?",
            features: {
                clips: {
                    title: "Auto Clips = More Content",
                    description: "Medal auto-captures key moments from your game, turning them into short, shareable clips. These clips become bite-sized ads for your experience, driving organic growth."
                },
                setup: {
                    title: "Setup is Simple",
                    description: "Send a quick capture call when something awesome happens — a win, a clutch moment, a funny fail, you name it."
                },
                reach: {
                    title: "Reach Millions of Players",
                    description: "Your clips live on a platform already used by millions of players. Plus, every clip links directly back to your game, bringing new players in."
                },
                content: {
                    title: "Content is King",
                    description: "For young gamers, discovery happens through content. With auto-clipping, your game stays top of mind — and top of feed."
                }
            }
        },
        apiKey: {
            title: "Get Public Key",
            registerGame: "Register Your App",
            selectGame: "Select the game your app is built for to get started.",
            searchPlaceholder: "Search for a game...",
            followers: "followers",
            clips: "clips",
            generateKey: "Generate API Key",
            appNameLabel: "Application Name",
            appNamePlaceholder: "Enter your application name",
            appUrlLabel: "Application Website",
            appUrlPlaceholder: "https://your-app-website.com",
            yourKeyTitle: "Your API Key",
            copyButton: "Copy",
            errorGeneric: "Failed to generate API key. Please try again.",
            copied: "Copied!",
            validationUrlRequired: "Please enter a valid website URL",
            nextSteps: "Ready to start sending events? Try out your new API key!",
            sendFirstEvent: "Send Your First Event"
        },
        docs: {
            sendEvents: {
                title: "Send Events",
                description: "Trigger a game event to initiate clip capture or bookmarking with associated context tags.",
                headers: "REQUEST HEADERS",
                requestBody: "REQUEST BODY",
                parameters: "Request Body Parameters",
                clipOptions: "Clip Options",
                alertTypes: "Alert Types",
                errors: "Possible Errors",
                property: "Property",
                type: "Type",
                required: "Required",
                columnDescription: "Description",
                default: "Default",
                value: "Value",
                errorCode: "Error Code",
                httpStatus: "HTTP Status",
                tableContent: {
                    eventId: {
                        description: "Unique ID of the game event"
                    },
                    eventName: {
                        description: "Name of the game event"
                    },
                    otherPlayers: {
                        description: "Array of other player objects"
                    },
                    contextTags: {
                        description: "Tags for event context as hashtags"
                    },
                    triggerActions: {
                        description: "Actions to be triggered by the event"
                    },
                    clipOptions: {
                        description: "Options for clip capture"
                    },
                    duration: {
                        description: "Duration of the clip in seconds"
                    },
                    captureDelayMs: {
                        description: "Amount of time (in milliseconds) to capture after the event is triggered"
                    },
                    alertType: {
                        description: "Type of notification alert to show (Default, Disabled, SoundOnly, OverlayOnly)"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "The request body does not match the expected model structure",
                    INVALID_EVENT: "The provided game event details are invalid",
                    MISSING_PUBLIC_KEY: "The publicKey header is missing from the request",
                    INVALID_APP_DATA: "Failed to retrieve app data associated with the provided public key",
                    INACTIVE_GAME: "The event was received but not processed because the categoryId does not match the active game",
                    DISABLED_EVENT: "The event was received but not processed because it is disabled in the user's ICYMI settings",
                    INTERNAL_ERROR: "An unexpected error occurred while processing the request"
                },
                alertTypes: {
                    Default: "Default alert behavior",
                    Disabled: "Disable alerts for this event",
                    SoundOnly: "Plays a clip sound if enabled, but no overlay",
                    OverlayOnly: "Displays an overlay if enabled, but no clip sound"
                }
            },
            sendContext: {
                title: "Send Context",
                description: "Submit game context, including details about the local player, server, and relevant global context tags.",
                headers: "REQUEST HEADERS",
                requestBody: "REQUEST BODY",
                parameters: "Request Body Parameters",
                errors: "Possible Errors",
                tableContent: {
                    serverId: {
                        description: "Unique ID of the server"
                    },
                    serverName: {
                        description: "Name of the server"
                    },
                    localPlayer: {
                        description: "Object containing local player information"
                    },
                    customStatus: {
                        description: "Custom activity status to set for the user"
                    },
                    globalContextTags: {
                        description: "Tags for global context as hashtags"
                    },
                    globalContextData: {
                        description: "Additional metadata for global context"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "The request body does not match the expected model structure",
                    MISSING_PUBLIC_KEY: "The publicKey header is missing from the request",
                    INVALID_APP_DATA: "Failed to retrieve app data associated with the provided public key",
                    INTERNAL_ERROR: "An unexpected error occurred while processing the request"
                }
            },
            common: {
                yes: "Yes",
                no: "No",
                contentType: "Content-Type",
                publicKey: "publicKey",
                headers: {
                    contentType: "application/json",
                    publicKey: "YOUR_PUBLIC_KEY"
                }
            }
        }
    },
    es: {
        nav: {
            gettingStarted: "Comenzar",
            overview: "Descripción General",
            getPublicKey: "Obtener Clave API",
            endpoints: "Endpoints",
            sendEvents: "Enviar Eventos",
            sendContext: "Enviar Contexto"
        },
        overview: {
            title: "Medal - API Local de Juegos",
            getStarted: "Comienza en 2 Pasos",
            step1: {
                title: "Obtén tu Clave API",
                description: "Registra tu aplicación y obtén tu clave API pública para comenzar a integrar las funciones de auto-clipping de Medal.",
                cta: "Obtener Clave"
            },
            step2: {
                title: "Envía Eventos del Juego",
                description: "Comienza a enviar eventos del juego para activar auto-clips cuando sucedan momentos emocionantes en tu juego.",
                cta: "Ver API de Eventos"
            },
            whyIntegrate: "¿Por qué integrarlo?",
            features: {
                clips: {
                    title: "Auto Clips = Más Contenido",
                    description: "Medal captura automáticamente momentos clave de tu juego, convirtiéndolos en clips cortos y compartibles. Estos clips se convierten en anuncios breves de tu experiencia, impulsando el crecimiento orgánico."
                },
                setup: {
                    title: "Configuración Simple",
                    description: "Envía una llamada de captura rápida cuando sucede algo increíble: una victoria, un momento crucial, un fallo divertido, lo que sea."
                },
                reach: {
                    title: "Alcanza Millones de Jugadores",
                    description: "Tus clips viven en una plataforma ya utilizada por millones de jugadores. Además, cada clip enlaza directamente a tu juego, atrayendo nuevos jugadores."
                },
                content: {
                    title: "El Contenido es Rey",
                    description: "Para los jugadores jóvenes, el descubrimiento ocurre a través del contenido. Con auto-clipping, tu juego permanece en la mente y en el feed."
                }
            }
        },
        apiKey: {
            title: "Obtener Clave Pública",
            registerGame: "Registrar tu Aplicación",
            selectGame: "Selecciona el juego para el que está construida tu aplicación para comenzar.",
            searchPlaceholder: "Buscar un juego...",
            followers: "seguidores",
            clips: "clips",
            generateKey: "Generar Clave API",
            appNameLabel: "Nombre de la Aplicación",
            appNamePlaceholder: "Ingrese el nombre de su aplicación",
            appUrlLabel: "Sitio Web de la Aplicación",
            appUrlPlaceholder: "https://sitio-web-de-su-aplicacion.com",
            yourKeyTitle: "Su Clave API",
            copyButton: "Copiar",
            errorGeneric: "Error al generar la clave API. Por favor, inténtelo de nuevo.",
            copied: "¡Copiado!",
            validationUrlRequired: "Por favor ingrese una URL de sitio web válida",
            nextSteps: "¿Listo para empezar a enviar eventos? ¡Prueba tu nueva clave API!",
            sendFirstEvent: "Enviar Su Primer Evento"
        },
        docs: {
            sendEvents: {
                title: "Enviar Eventos",
                description: "Activa un evento del juego para iniciar la captura de clips o marcadores con etiquetas de contexto asociadas.",
                headers: "ENCABEZADOS HTTP",
                requestBody: "CUERPO DE LA SOLICITUD",
                parameters: "Parámetros del Cuerpo de la Solicitud",
                clipOptions: "Opciones de Clip",
                alertTypes: "Tipos de Alerta",
                errors: "Posibles Errores",
                property: "Propiedad",
                type: "Tipo",
                required: "Requerido",
                columnDescription: "Descripción",
                default: "Predeterminado",
                value: "Valor",
                errorCode: "Código de Error",
                httpStatus: "Estado HTTP",
                tableContent: {
                    eventId: {
                        description: "ID único del evento del juego"
                    },
                    eventName: {
                        description: "Nombre del evento del juego"
                    },
                    otherPlayers: {
                        description: "Array de objetos de otros jugadores"
                    },
                    contextTags: {
                        description: "Etiquetas para el contexto del evento"
                    },
                    triggerActions: {
                        description: "Acciones a ser activadas por el evento"
                    },
                    clipOptions: {
                        description: "Opciones para la captura del clip"
                    },
                    duration: {
                        description: "Duración del clip en segundos"
                    },
                    captureDelayMs: {
                        description: "Tiempo (en milisegundos) para capturar después de que se active el evento"
                    },
                    alertType: {
                        description: "Tipo de alerta de notificación a mostrar (Default, Disabled, SoundOnly, OverlayOnly)"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "El cuerpo de la solicitud no coincide con la estructura del modelo esperado",
                    INVALID_EVENT: "Los detalles del evento del juego proporcionados no son válidos",
                    MISSING_PUBLIC_KEY: "Falta el encabezado publicKey en la solicitud",
                    INVALID_APP_DATA: "Error al recuperar los datos de la aplicación asociados con la clave pública proporcionada",
                    INACTIVE_GAME: "El evento fue recibido pero no procesado porque el categoryId no coincide con el juego activo",
                    DISABLED_EVENT: "El evento fue recibido pero no procesado porque está deshabilitado en la configuración ICYMI del usuario",
                    INTERNAL_ERROR: "Ocurrió un error inesperado al procesar la solicitud"
                },
                alertTypes: {
                    Default: "Comportamiento de alerta predeterminado",
                    Disabled: "Deshabilitar alertas para este evento",
                    SoundOnly: "Reproduce un sonido de clip si está habilitado, sin superposición",
                    OverlayOnly: "Muestra una superposición si está habilitada, sin sonido de clip"
                }
            },
            sendContext: {
                title: "Enviar Contexto",
                description: "Envía el contexto del juego, incluyendo detalles sobre el jugador local, el servidor y etiquetas de contexto relevantes.",
                headers: "ENCABEZADOS HTTP",
                requestBody: "CUERPO DE LA SOLICITUD",
                parameters: "Parámetros del Cuerpo de la Solicitud",
                errors: "Posibles Errores",
                tableContent: {
                    serverId: {
                        description: "ID único del servidor"
                    },
                    serverName: {
                        description: "Nombre del servidor"
                    },
                    localPlayer: {
                        description: "Objeto que contiene información del jugador local"
                    },
                    customStatus: {
                        description: "Estado de actividad personalizado para el usuario"
                    },
                    globalContextTags: {
                        description: "Etiquetas para el contexto global"
                    },
                    globalContextData: {
                        description: "Metadatos adicionales para el contexto global"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "El cuerpo de la solicitud no coincide con la estructura del modelo esperado",
                    MISSING_PUBLIC_KEY: "Falta el encabezado publicKey en la solicitud",
                    INVALID_APP_DATA: "Error al recuperar los datos de la aplicación asociados con la clave pública proporcionada",
                    INTERNAL_ERROR: "Ocurrió un error inesperado al procesar la solicitud"
                }
            },
            common: {
                yes: "Sí",
                no: "No",
                contentType: "Content-Type",
                publicKey: "publicKey",
                headers: {
                    contentType: "application/json",
                    publicKey: "TU_CLAVE_PUBLICA"
                }
            }
        }
    },
    kr: {
        nav: {
            gettingStarted: "시작하기",
            overview: "개요",
            getPublicKey: "API Key 받기",
            endpoints: "엔드포인트",
            sendEvents: "이벤트 전송",
            sendContext: "컨텍스트 전송"
        },
        overview: {
            title: "Medal - 로컬 게임 API",
            getStarted: "2단계로 시작하기",
            step1: {
                title: "API Key 생성하기",
                description: "앱을 등록하고 공개 API Key를 생성하여 Medal의 자동 클립 기능과 통합을 시작하세요.",
                cta: "키 생성하기"
            },
            step2: {
                title: "게임 이벤트 전송",
                description: "게임에서 흥미진진한 순간이 발생할 때 자동 클립을 트리거하기 위해 게임 이벤트를 전송하세요.",
                cta: "이벤트 API 보기"
            },
            whyIntegrate: "통합이 필요한 이유",
            features: {
                clips: {
                    title: "자동 클립 = 더 많은 콘텐츠",
                    description: "Medal은 게임의 주요 순간을 자동으로 캡처하여 짧고 공유 가능한 클립으로 변환합니다. 이러한 클립들은 게임 경험을 홍보하는 짧은 광고가 되어 자연스러운 성장을 이끌어냅니다."
                },
                setup: {
                    title: "간단한 설정",
                    description: "승리, 결정적인 순간, 재미있는 실수 등 멋진 일이 발생할 때 빠른 캡처 호출을 보내세요."
                },
                reach: {
                    title: "수백만 플레이어에게 도달",
                    description: "클립들은 이미 수백만 플레이어가 사용하는 플랫폼에서 생활합니다. 또한, 모든 클립은 게임으로 직접 연결되어 새로운 플레이어를 유입시킵니다."
                },
                content: {
                    title: "콘텐츠가 핵심",
                    description: "젊은 게이머들에게 발견은 콘텐츠를 통해 이루어집니다. 자동 클립 기능을 통해 게임이 항상 기억되고 피드의 상단에 유지됩니다."
                }
            }
        },
        apiKey: {
            title: "공개 키 받기",
            registerGame: "앱 등록하기",
            selectGame: "앱이 개발된 게임을 선택하여 시작하세요.",
            searchPlaceholder: "게임 검색...",
            followers: "팔로워",
            clips: "클립",
            generateKey: "API Key 생성하기",
            appNameLabel: "앱 이름",
            appNamePlaceholder: "앱 이름을 입력하세요",
            appUrlLabel: "앱 웹사이트",
            appUrlPlaceholder: "https://your-app-website.com",
            yourKeyTitle: "귀하의 API Key",
            copyButton: "복사",
            errorGeneric: "API Key 생성에 실패했습니다. 다시 시도해 주세요.",
            copied: "복사됨!",
            validationUrlRequired: "유효한 웹사이트 URL을 입력해 주세요",
            nextSteps: "이벤트를 보내기 준비되셨나요? 새로운 API Key를 테스트해보세요!",
            sendFirstEvent: "첫 번째 이벤트 보내기"
        },
        docs: {
            sendEvents: {
                title: "이벤트 전송",
                description: "관련 컨텍스트 태그와 함께 클립 캡처 또는 북마크를 시작하기 위한 게임 이벤트를 트리거합니다.",
                headers: "요청 헤더",
                requestBody: "요청 본문",
                parameters: "요청 본문 매개변수",
                clipOptions: "클립 옵션",
                alertTypes: "알림 유형",
                errors: "가능한 오류",
                property: "속성",
                type: "유형",
                required: "필수",
                columnDescription: "설명",
                default: "기본값",
                value: "값",
                errorCode: "오류 코드",
                httpStatus: "HTTP 상태",
                tableContent: {
                    eventId: {
                        description: "게임 이벤트의 고유 ID"
                    },
                    eventName: {
                        description: "게임 이벤트의 이름"
                    },
                    otherPlayers: {
                        description: "다른 플레이어 객체 배열"
                    },
                    contextTags: {
                        description: "이벤트 컨텍스트를 위한 해시태그"
                    },
                    triggerActions: {
                        description: "이벤트에 의해 트리거될 작업"
                    },
                    clipOptions: {
                        description: "클립 캡처 옵션"
                    },
                    duration: {
                        description: "클립 길이(초)"
                    },
                    captureDelayMs: {
                        description: "이벤트가 트리거된 후 캡처할 시간(밀리초)"
                    },
                    alertType: {
                        description: "표시할 알림 유형 (Default, Disabled, SoundOnly, OverlayOnly)"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "요청 본문이 예상된 모델 구조와 일치하지 않습니다",
                    INVALID_EVENT: "제공된 게임 이벤트 세부 정보가 유효하지 않습니다",
                    MISSING_PUBLIC_KEY: "요청에서 publicKey 헤더가 누락되었습니다",
                    INVALID_APP_DATA: "제공된 공개 키와 연결된 앱 데이터를 검색하는데 실패했습니다",
                    INACTIVE_GAME: "categoryId가 활성 게임과 일치하지 않아 이벤트가 수신되었지만 처리되지 않았습니다",
                    DISABLED_EVENT: "사용자의 ICYMI 설정에서 비활성화되어 이벤트가 수신되었지만 처리되지 않았습니다",
                    INTERNAL_ERROR: "요청을 처리하는 동안 예기치 않은 오류가 발생했습니다"
                },
                alertTypes: {
                    Default: "기본 알림 동작",
                    Disabled: "이 이벤트에 대한 알림 비활성화",
                    SoundOnly: "활성화된 경우 클립 소리만 재생 (오버레이 없음)",
                    OverlayOnly: "활성화된 경우 오버레이만 표시 (소리 없음)"
                }
            },
            sendContext: {
                title: "컨텍스트 전송",
                description: "로컬 플레이어, 서버 및 관련 글로벌 컨텍스트 태그를 포함한 게임 컨텍스트를 제출합니다.",
                headers: "요청 헤더",
                requestBody: "요청 본문",
                parameters: "요청 본문 매개변수",
                errors: "가능한 오류",
                tableContent: {
                    serverId: {
                        description: "서버의 고유 ID"
                    },
                    serverName: {
                        description: "서버 이름"
                    },
                    localPlayer: {
                        description: "로컬 플레이어 정보를 포함하는 객체"
                    },
                    customStatus: {
                        description: "사용자에 대해 설정할 사용자 지정 활동 상태"
                    },
                    globalContextTags: {
                        description: "글로벌 컨텍스트를 위한 해시태그"
                    },
                    globalContextData: {
                        description: "글로벌 컨텍스트를 위한 추가 메타데이터"
                    }
                },
                errorDescriptions: {
                    INVALID_MODEL: "요청 본문이 예상된 모델 구조와 일치하지 않습니다",
                    MISSING_PUBLIC_KEY: "요청에서 publicKey 헤더가 누락되었습니다",
                    INVALID_APP_DATA: "제공된 공개 키와 연결된 앱 데이터를 검색하는데 실패했습니다",
                    INTERNAL_ERROR: "요청을 처리하는 동안 예기치 않은 오류가 발생했습니다"
                }
            },
            common: {
                yes: "예",
                no: "아니오",
                contentType: "Content-Type",
                publicKey: "publicKey",
                headers: {
                    contentType: "application/json",
                    publicKey: "귀하의_공개_키"
                }
            }
        }
    }
}; 