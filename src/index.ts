import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

dotenv.config();

const app = express();
const appPort = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(appPort, () => console.log(`> Server started on port ${appPort}`));
