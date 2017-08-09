var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '@request.json';

var options = {
    url: '\' ,
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

curl -v -s -H "Content-Type: application/json" \ 
https://vision.googleapis.com/v1/images:annotate \
?key\=AIzaSyAhxE2W2vKkz18h3DrqhKf7AkMdGhIIx2E \
--data-binary @request.json