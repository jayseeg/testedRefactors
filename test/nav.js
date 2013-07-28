var baseURL = 'http://localhost/dvlpDnvr/refactor/';


casper.test.begin('Main nav works on home page', 8, function homeNavSuite(test) {
	var fileName = 'index.html',
		testURL = baseURL + fileName;
	casper.start(testURL, function() {
		test.assertUrlMatch(/(index.html)/, 'On the correct page.');
		this.click('.header-nav-links li:first-child a');
	}).then(function () {
		test.assertUrlMatch(/(index.html)/, 'Home link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(2) a');
	}).then(function () {
		test.assertUrlMatch(/(products.html)/, 'Products link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(3) a');
	}).then(function () {
		test.assertUrlMatch(/(case-studies.html)/, 'Case Studies link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(4) a');
	}).then(function () {
		test.assertUrlMatch(/(other-cool-shit.html)/, 'Other cool shit link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(5) a');
	}).then(function () {
		test.assertUrlMatch(/(nifty-people.html)/, 'Nifty people link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(6) a');
	}).then(function () {
		test.assertUrlMatch(/(why-does-this-site-have-so-many-main-nav-links.html)/, 'WTF link opens correct page.');
	}).then(function () {
		this.open(testURL);
	}).then(function () {
		this.click('.header-nav-links li:nth-child(7) a');
	}).then(function () {
		test.assertUrlMatch(/(stop-adding-links.html)/, 'Stop the Madness link opens correct page.');
	}).run(function() {
		test.done();
	});
});