import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { dbConnect } from "./lib/dbConnect";

dotenv.config();

const app = express();
const appPort = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(notFound);
app.use(errorHandler);

dbConnect()
  .then(() => app.listen(appPort, () => console.log(`> Server started on port ${appPort}`)))
  .catch((e) => console.error(`> [Error] ${e}`));
