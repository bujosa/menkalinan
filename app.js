const https = require("https");

callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });
    response.on('end', function () {
        console.log(str);
    });
}

var req = https.request("https://jsonmock.hackerrank.com/api/stocks?date=2020-01-01", callback);
req.end();

