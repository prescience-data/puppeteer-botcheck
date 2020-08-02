# A collection of bot detection tests for Puppeteer

This class accepts a Puppeteer page instance and allows the user to run a series of tests against known bot detection tools and products.

The scores or outcome will be shown in the console.

### Available tests

* Sannysoft - https://bot.sannysoft.com
* Recaptcha Score - https://antcpt.com/eng/information/demo-form/recaptcha-3-test-score.html
* SocialNetDefender - http://anonymity.space/hellobot.php
* AreYouHeadless - https://arh.antoinevastel.com/bots/areyouheadless
* FingerprintJS2 - https://fingerprintjs.com/demo
* Datadome - https://datadome.co
* Executution Monitor https://prescience-data.github.io/execution-monitor.html


### Usage

* Run `npm install` to pull down `puppeteer`
* Add your desired tests to `test.js` and configure your client
* Run `node test` 
