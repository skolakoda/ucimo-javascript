var page = require('webpage').create(); // phantomjs module

page.open('https://skolakoda.org/', function() {
  page.render('naslovna.png');
  phantom.exit();
});
