class Botcheck {

	page;

	/**
	 * Must pass in a valid Puppeteer page instance
	 * @param page
	 */

	constructor(page) {
		this.page = page;
	}

	/**
	 * Simple goto and wait function used to load each test
	 * @param url
	 * @param delay
	 * @returns {Promise<*>}
	 */
	async goto(url, delay) {
		return new Promise(async (resolve, reject) => {
			try {
				if (url) {
					delay = delay ? parseInt(delay) : 2000;
					await this.page.goto(url, { waitUntil: 'networkidle2' });
					await this.page.delay(delay);
					resolve();
				}
				else {
					reject('No url provided');
				}
			} catch (err) {
				reject(err);
			}
		});
	}

	/**
	 *
	 * Methods for running tests
	 *
	 */

	async sannysoft() {
		return new Promise(async (resolve, reject) => {
			try {

				await this.goto('https://bot.sannysoft.com', 5000);

				const output = await this.page.evaluate(() => {
					return new Promise(async (resolve, reject) => {
						let results = [];

						const tables = document.querySelectorAll('table');
						let rows;
						let cols;

						for (let i = 0; i < 2; i++) {
							if (tables[i]) {
								rows = tables[i].querySelectorAll('tr');

								rows.forEach(row => {
									cols = row.querySelectorAll('td');
									results.push({
										             name: cols[0] ? cols[0] : null,
										             result: cols[1] ? cols[1] : null
									             });
								});
							}
						}

						resolve(results);
					});
				});

				console.log('Sannysoft', output);

				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

	async recaptcha() {
		return new Promise(async (resolve, reject) => {
			try {

				await this.goto('https://antcpt.com/eng/information/demo-form/recaptcha-3-test-score.html', 15000);

				const element = await this.page.$('#score');

				let output = await this.page.evaluate(element => element.textContent, element);

				console.log('Recaptcha Score', output);
				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

	async hellobot() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.goto('http://anonymity.space/hellobot.php', 3000);

				await this.page.waitForSelector('#result');
				const element = await this.page.$('#result');

				let output = await (await element.getProperty('textContent')).jsonValue();

				console.log('HelloBot', output);
				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

	async areyouheadless() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.goto('https://arh.antoinevastel.com/bots/areyouheadless', 2000);

				await this.page.waitForSelector('#res');
				const element = await this.page.$('#res');

				let output = await (await element.getProperty('textContent')).jsonValue();

				console.log('AreYouHeadless', output);
				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

	async fingerprintjs() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.goto('https://fingerprintjs.com/demo', 5000);

				await this.page.waitForSelector('table.table-compact');
				const element = await this.page.$('table.table-compact > tbody > tr:nth-child(4) > td.miriam');

				let text = await (await element.getProperty('textContent')).jsonValue();
				let output = (text === 'NO') ? 'Passed' : 'Failed';

				console.log('FingerprintJS', output);
				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

	async datadome() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.goto('https://datadome.co', 2000);

				const button = await this.page.$('#menu-item-18474');

				if (button) {
					await button.click({ delay: 10 });
					await this.page.waitForNavigation({ waitUntil: 'networkidle2' });
					await this.page.delay(200, 500);
				}
				else {
					console.log('Could not find the button!');
				}

				let captcha = await this.page.$('iframe[src^="https://geo.captcha-delivery.com/captcha/"]');
				let output = captcha ? 'Failed' : 'Passed';

				console.log('Datadome', output);
				resolve(output);

			} catch (err) {
				reject(err);
			}
		});
	}

}

module.exports = Botcheck;