import { generateArrayFromTo } from "./helpers";

export const PORT = 5000;
export const BASE_URL = "https://chess-samara.ru/library/problems/";
export const CELLS_ON_BOARD = generateArrayFromTo(1, 64);
export const CONCURRENCY = 10;
