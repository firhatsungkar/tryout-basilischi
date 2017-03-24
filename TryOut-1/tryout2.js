var fs = require('fs');
var _ = require('lodash');
var http = require('http');
var https = require('https');
var site = process.argv[2];
var req = site.split(':')[0];
var file = '';
var result = [];
var rawHeaders = '';

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

if(req === 'http') {
    var request = http.get(site, function(response){
        rawHeaders = response.rawHeaders;
        rawHeaders = rawHeaders.filter(function(val){
            var re = /text\/html/gi;
            return val.match(re);
        });


        if(rawHeaders.length > 0){
            console.log('The result is HTML');
            response.on('data', function (chunk) {
            var chunkString = (''+chunk).split('\n');
            var title = chunkString.filter(function(val){
                var re = /title/gi;
                return val.match(re);
            }).join('');
            console.log(title);
        });
        } else {
            console.log('The result is not HTML');
        }
    });
} else if (req === 'https'){
    var request = https.get(site, function(response){
        rawHeaders = response.rawHeaders;
        response.on('data', function (chunk) {
            console.log('BODY: ' + chunk)
        });
    });
}