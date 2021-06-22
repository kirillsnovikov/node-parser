import { queue, AsyncResultCallback } from "async";
import { handlePage } from "./parser/handlePage";
import { CONCURRENCY } from "./constants";
import p from "./parser/puppeteer";
import { PageResult } from "./types";
import fs from "fs";

let result: { [key: string]: string[] } = {};
const q = queue((url: string, exec: AsyncResultCallback<PageResult>) => {
  try {
    handlePage(url).then((result) => {
      console.log(`Task completed, tasks left: ${q.length()}\n`);
      exec(null, result);
    });
  } catch (e) {
    throw e;
  }
}, CONCURRENCY);

q.drain(() => {
  console.log(`All items completed`);
  fs.writeFileSync(
    `${Object.keys(result).length}_${new Date().getTime()}.json`,
    JSON.stringify(result),
    { encoding: "utf-8" }
  );
  p.closeBrowser();
  process.exit();
});

export const addInQueue = (url: string) => {
  q.push<PageResult>(url, (err, res) => {
    if (err) {
      console.log(err);
    }
    if (!res) {
      console.log(`Вернулся пустой массив фигур`);
    } else {
      if (res.length < 10) {
        console.log("меньше 10 шахмат на доске");
      } else {
        console.log(`This url completed: ${url}\n`);
        result[url] = res;
      }
    }
  });
};
