import { PuppeteerHandler } from "./puppeteer";
import fs from "fs";

export const getHtml = async (url: string): Promise<string | undefined> => {
  const p = new PuppeteerHandler();
  return Promise.resolve(fs.readFileSync("./mock.html", "utf-8"));
  //   return await p.getHtml(url);
};
