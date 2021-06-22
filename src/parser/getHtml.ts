import p from "./puppeteer";

export const getHtml = async (url: string): Promise<string | undefined> => {
  //   return Promise.resolve(fs.readFileSync("./mock.html", "utf-8"));
  return await p.getHtml(url);
};
