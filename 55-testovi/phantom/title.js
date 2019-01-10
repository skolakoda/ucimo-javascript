// example to show the title of a web page
var page = require('webpage').create();

page.open('https://skolakoda.org/', function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is: ' + title);
  phantom.exit();
});