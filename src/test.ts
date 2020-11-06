import chalk from "chalk"
import { LaunchOptions } from "puppeteer"
import Puppeteer from "puppeteer-extra"
import Stealth from "puppeteer-extra-plugin-stealth"
import { argv } from "yargs"

import BotCheck from "./botcheck"

/**
 * Set your browser path.
 * Must change if wanting to test on Linux or a browser other than Chrome.
 * @type {string}
 */
const BROWSER_PATH: string =
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"

/**
 * Your Puppeteer launch options.
 * @type {LaunchOptions}
 */
const options: LaunchOptions = {
  headless: false,
  ignoreHTTPSErrors: true,
  executablePath: BROWSER_PATH,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-sync",
    "--ignore-certificate-errors",
    "--user-agent=" +
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36",
    "--lang=en-US,en;q=0.9",
  ],
  defaultViewport: { width: 1366, height: 768 },
}
;(async () => {
  const tag: string = String(argv.tag)
  if (tag) {
    try {
      // Boot Puppeteer and BotCheck.
      Puppeteer.use(Stealth())
      const browser = await Puppeteer.launch(options)
      const page = await browser.newPage()
      const botcheck = new BotCheck(page)
      // Only continue if the test exists.
      if (botcheck) {
        console.log(chalk.blue(`⏱ Attempting test: ${tag}...`))
        try {
          // Run test and display result.
          const result: string = await botcheck.run(tag)
          console.log(result)
        } catch (err) {
          console.warn(chalk.red(err.message))
        }
      } else {
        console.log(chalk.yellow(`⚠ Test not found.`))
      }
      // Clean up.
      await browser.close()
    } catch (err) {
      console.log(chalk.red(err.message))
    }
  } else {
    console.log(chalk.yellow(`⚠ No test defined.`))
  }
  process.exit()
})()
