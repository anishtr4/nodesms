var http = require('http');
var unirest = require('unirest');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });
    response.end('Hello World\n');
}).listen(1337);

// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://webaroo-mobile-verification.p.mashape.com/mobileVerification?phone=919945297098")
.header("X-Mashape-Key", "a32f3prMbpmshDCfXnsSUSoSrLTlp1MSmyxjsntqX6fJ9wuF2x")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});