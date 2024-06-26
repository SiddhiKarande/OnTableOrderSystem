import express from "express";
import { connectToMongo } from "./connections/connect.mongo";
import { registerMiddlewares } from "./routes/routes";

export const startServer = async () => {
  try {
    await connectToMongo();
    const app = express();

    registerMiddlewares(app);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`SERVER STARTED LISTENING ON PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
