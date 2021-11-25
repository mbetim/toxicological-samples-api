import mongoose from "mongoose";

export const dbConnect = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) return reject("MONGO_URI must be defined");

    mongoose.connect(mongoUri);

    mongoose.connection.on("connected", () => {
      console.log("> Connection to Mongo established");
      resolve();
    });

    mongoose.connection.on("error", (err) => {
      console.error("> [ERROR} Failed to connect to MongoDB, retrying", err);

      setTimeout(() => {
        mongoose.connect(mongoUri);
      }, 30);
    });

    mongoose.Promise = global.Promise;
  });
