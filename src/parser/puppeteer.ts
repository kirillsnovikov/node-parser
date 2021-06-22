import puppeteer, { Browser } from "puppeteer";

export const LAUNCH_PUPPETEER_OPTS = {
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--disable-gpu",
    "--window-size=1920x1080",
  ],
};

export class PuppeteerHandler {
  browser: null | Browser;
  constructor() {
    this.browser = null;
  }
  async initBrowser() {
    this.browser = await puppeteer.launch(LAUNCH_PUPPETEER_OPTS);
  }
  closeBrowser() {
    this.browser?.close();
  }
  async getHtml(url: string): Promise<string | undefined> {
    if (!this.browser) {
      await this.initBrowser();
    }

    try {
      const page = await this.browser?.newPage();
      await page?.goto(url, {
        waitUntil: "networkidle2",
        timeout: 3000000,
      });
      return await page?.content();
    } catch (err) {
      throw err;
    }
  }
}
