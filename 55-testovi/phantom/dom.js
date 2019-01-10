var page = require('webpage').create();

page.open('https://skolakoda.org/baza-filmova/', function(status) {
	var text = page.evaluate(function() {
		return document.querySelector("h1").textContent;
	});
	console.log(text);
	phantom.exit();
});
