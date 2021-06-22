import { BASE_URL } from "../constants";
import { addInQueue } from "../queue";
import { handlePage } from "./handlePage";

export const startParser = () => {
  for (const item of [1]) {
    const url = `${BASE_URL}${item}`;
    console.log(url, "url");
    handlePage(url);
    // addInQueue(() => handlePage(url));
  }
};
