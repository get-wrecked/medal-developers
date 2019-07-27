var http = require("http");
var https = require("https");


const API_KEY = `YOUR_API_KEY`;

var categoriesById = {};
var categoriesByName = {};

function getCategoriesAndRunExamples() {
    var options = {
        host: 'developers.medal.tv',
        port: 443,
        path: '/v1/categories',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    };
    getJSON(options, function(statusCode, result) {
        result.forEach(function(category) {
            categoriesById[category.categoryId] = category;
            categoriesByName[category.categoryName.toLowerCase()] = category;
        })

        getTopClipsForSpecificGame(2, "pubg")
        getLatestClipsForSpecificGame(2, "fortnite")
    });
}


function getTopClipsForSpecificGame(amount, game) {
    var options = {
        host: 'developers.medal.tv',
        port: 443,
        path: '/v1/trending?limit='+amount+"&categoryId="+categoriesByName[game.toLowerCase()].categoryId,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    };

    getJSON(options, function(statusCode, result) {
        console.log(amount + " top clips for " + game + " ####################################################");
        console.log(result);

    });

}

function getLatestClipsForSpecificGame(amount, game) {
    var options = {
        host: 'developers.medal.tv',
        port: 443,
        path: '/v1/latest?limit='+amount+"&categoryId="+categoriesByName[game.toLowerCase()].categoryId,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    };

    getJSON(options, function(statusCode, result) {
        console.log(amount + " top clips for " + game + " ####################################################");
        console.log(result);

    });

}


/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};



getCategoriesAndRunExamples();
