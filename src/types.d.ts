import { Page } from "puppeteer"

export interface BotCheck {
  page: Page

  isolatedWorld(): Promise<string>

  behaviorMonitor(): Promise<string>

  f5network(): Promise<string>

  pixelscan(): Promise<string>

  sannysoft(): Promise<string>

  recaptcha(): Promise<string>

  fingerprintJs(): Promise<string>

  datadome(): Promise<string>

  whiteOps(): Promise<string>
}
