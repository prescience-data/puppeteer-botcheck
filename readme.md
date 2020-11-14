# 🕵‍♂ A collection of bot detection tests for Puppeteer Extra


> ### Note: A cleaner version of these tests will be getting migrated to Foundation: https://github.com/prescience-data/foundation
> I still intend to keep these updated but will likely get less attention than the `Foundation` package.

This class accepts a `Puppeteer` page instance and allows the user to run a series of tests against known bot detection tools and products.

The scores or outcome will be shown in the console.

<img src="https://media.giphy.com/media/l0HlGlpFpV9LjXDK8/giphy.gif" height="300" alt="DanceContinues" />

### 🧰 Available Tests

- SannySoft 
  - `npm test -- --tag=sannysoft` 
  - https://bot.sannysoft.com/
- Recaptcha Score 
  - `npm test -- --tag=recaptcha` 
  - https://antcpt.com/eng/information/demo-form/recaptcha-3-test-score.html 
- AreYouHeadless 
  - `npm test -- --tag=areyouheadless` 
  - https://arh.antoinevastel.com/bots/areyouheadless/
- FingerprintJS2 
  - `npm test -- --tag=fingerprintjs` 
  - https://fingerprintjs.com/demo/
- Datadome 
  - `npm test -- --tag=datadome` 
  - https://datadome.co/
- Execution Monitor 
  - `npm test -- --tag=execution` 
  - https://prescience-data.github.io/execution-monitor.html
- Behavior Monitor 
  - `npm test -- --tag=behaviour` 
  - https://prescience-data.github.io/behavior-monitor.html
- F5 Network 
  - `npm test -- --tag=f5` 
  - https://ib.bri.co.id/ib-bri/
- WhiteOps 
  - `npm test -- --tag=whiteops` 
  - https://www.whiteops.com/ _(Need better test case if available)_
- PixelScan 
  - `npm test -- --tag=pixelscan` 
  - https://pixelscan.net/

### 🛠 Usage

1. Run `npm install` to pull down `puppeteer`, `puppeteer-extra`, `typescript`,  and other dependencies.
2. Edit `test.ts` to adjust your configuration if required.
3. Run `node test -- --tag={testName}`
