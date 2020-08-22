var screenshotPath = 'tests_output/screenshots/ie/';

/* Each key will become a test case */
module.exports = {
    '@tags': ['local', 'ie'],

    'IE test case': function (browser) {
        browser
            .url('http://bs-local.com:8083/build')
            .waitForElementVisible('body')
            .saveScreenshot(screenshotPath + 'init.png')
            .moveToElement('.icon-link', 10, 10)
            .pause(1000)
            .saveScreenshot(screenshotPath + 'hover-link.png')
            .end();
    },
};