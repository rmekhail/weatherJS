var request = require('request');
var ipinfoURL = 'http://ipinfo.io';

module.exports = function(callback) {
   request({ url: ipinfoURL, json: true }, (error, response, body) => {
    if(error) {
        callback();
    } else {
        callback(body);
    }
   });
};