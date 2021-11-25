import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { api } from "./api";
import { dbConnect } from "./lib/dbConnect";
import { appPort } from "./constants/configs";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

dbConnect()
  .then(() => app.listen(appPort, () => console.log(`> Server started on port ${appPort}`)))
  .catch((e) => console.error(`> [Error] ${e}`));
