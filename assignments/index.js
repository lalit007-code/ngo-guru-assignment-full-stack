import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Mongo db connection failed", error));
