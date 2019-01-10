var page = require('webpage').create();

page.onResourceRequested = function(requestData, networkRequest) {
    console.log('Request (#' + requestData.id + '): ' + requestData.url);
};

page.onResourceReceived = function(response) {
    if (response.stage !== "end") return;
    console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + response.url);
};

page.onUrlChanged = function(targetUrl) {
    console.log('New URL: ' + targetUrl);
};

page.onLoadFinished = function(status) {
    console.log('Load Finished: ' + status);
};

page.onLoadStarted = function() {
    console.log('Load Started');
};

page.onNavigationRequested = function(url, type, willNavigate, main) {
    console.log('Trying to navigate to: ' + url);
};

page.open("https://www.tehnomanija.rs/", function(status){
    page.evaluate(function(){
        var e = document.createEvent('MouseEvents');
        e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.querySelector("a.product-link").dispatchEvent(e);
    });
    setTimeout(function(){
        phantom.exit();
    }, 10000);
});
