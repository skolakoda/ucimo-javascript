// meri brzinu ucitavanja prosledjene adrese

var page = require('webpage').create();
var t = Date.now();

page.open("https://skolakoda.org", function(status) {
	console.log('Status:' + status);
	t = Date.now() - t;
	console.log('Loading time ' + t + ' msec');
	phantom.exit();
});
