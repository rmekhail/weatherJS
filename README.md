# weatherJS
A weather detection application written in NodeJS. 

Node package request used by default to determine the location by IP, but yargs package allows specifying the city via flag -c or --city, e.g.:

node app.js -c Fresno
node app.js --city "New York"
