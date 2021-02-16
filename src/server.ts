import express from "express";
import "express-async-errors";

import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";

// The process object is an instance of EventEmitter.
process.on("uncaughtException", (e) => {
  console.log("uncaughtException!", e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log("unhandledRejection", e);
  process.exit(1);
});

const { PORT = 3000 } = process.env;

const app = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);
// Error middleware
applyMiddleware(errorHandlers, app);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}...`);
});
