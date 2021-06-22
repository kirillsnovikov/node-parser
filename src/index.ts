import express, { Application, Request, Response, NextFunction } from "express";
import { PORT } from "./constants";
import { startParser } from "./parser/parser";

// Boot express
const app: Application = express();

// Application routing
app.use(
  "/parse",
  (
    req: Request<{}, {}, {}, { from: string; to: string }>,
    res: Response,
    next: NextFunction
  ) => {
    const {
      query: { from, to },
    } = req;
    startParser(Number(from), Number(to));
    res.status(200).send("SUccess");
  }
);

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
