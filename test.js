const puppeteer = require('puppeteer');
const Botcheck = require('./Botcheck');

const options = {
	headless: false,
	ignoreHTTPSErrors: true,
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-sync',
		'--ignore-certificate-errors',
		'--user-agent=' + 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
		'--lang=en-US,en;q=0.9',
	],
	defaultViewport: { width: 1366, height: 768 }
};

(async () => {
	const browser = await puppeteer.launch(options);
	const page = await browser.newPage();

	const botcheck = new Botcheck(page);

	await botcheck.isolatedWorld();

	// Add the tests you wish to run here...

})();

