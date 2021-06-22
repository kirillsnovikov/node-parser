import express, { Application, Request, Response, NextFunction } from "express";
import { PORT } from "./constants";
import { startParser } from "./parser/parser";

// Boot express
const app: Application = express();

// Application routing
app.use("/parse", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, "req");
  startParser();
  res.status(200).send("SUccess");
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
