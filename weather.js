var request = require('request');
var url1 = 'http://api.openweathermap.org/data/2.5/weather?';
var url2 = 'units=imperial&appid=3955fa1d143e6a62aa823a1e86219e61';
module.exports = function(city) {
    return new Promise((resolve, reject) => {
        city = encodeURIComponent(city);
        var url = url1 + 'q=' + city + '&' + url2;
        request({ url: url, json: true }, (error, response, body) => {
            if(error) {
                reject('unable to retrieve the temperature');
            } else {
                resolve(body.main['temp']);
            }  
        });        
    });

};