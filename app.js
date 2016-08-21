var location = require('./location.js');
var weather = require('./weather.js');
var argv = require('yargs')
            .option('city', {
                alias: 'c',
                describe: 'Choose a city to report the weather',
                type: 'string'
            })
            .argv;
            
var city = '';

if (typeof argv.c === 'string' && argv.c.length > 0) {
    city = argv.c;
}
// parse command line for location here

if (city === '') {
    location(function (location) {
        if (!location) {
            console.log ('unable to retrieve location data');
            return;
        }
        city = location.city;
        weather(city).then(function(temp) {
            console.log ("It's " + temp + "F in " + city);
        }, function(){
            console.log('Unable to retrieve the weather data.');
            return;
        });
    });
} else {
        weather(city).then(function(temp) {
            console.log ("It's " + temp + "F in " + city);
        }, function(){
            console.log('Unable to retrieve the weather data.');
            return;
        });
}
