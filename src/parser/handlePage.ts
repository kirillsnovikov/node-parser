import cheerio, { CheerioAPI } from "cheerio";
import { CELLS_ON_BOARD } from "../constants";
import { HandlePage } from "../types";
import { getHtml } from "./getHtml";

export const handlePage: HandlePage = async (url: string) => {
  const html = await getHtml(url);
  if (!html) {
    console.log(url, "Html undefined");
    return;
  }
  const $ = cheerio.load(html);
  console.log(getFigures($));
};

const getFigures = ($: CheerioAPI): string[] => {
  let res = [];
  for (let cell of CELLS_ON_BOARD) {
    const node = $(`#_piece_${cell}`);
    const className = node.attr("class");
    if (className?.indexOf("empty-cell") === -1) {
      const square = node.parent().attr("data-cell");
      const figure = className.split(" ").pop();
      res.push(`${square}_${figure}`);
    }
  }
  return res;
};
