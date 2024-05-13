import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();












/*

Approach - 1

import express from "express";

const app = express();

async () => {
  try {
    await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

*/
