import http from "http";
import express from "express";

import "express-async-errors";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routerHandlers from "./services";

process.on("uncaughtException", (e) => {
  console.log("uncaughtException!", e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log("unhandledRejection!", e);
  process.exit(1);
});

const app = express();
applyMiddleware(middleware, app);
applyMiddleware(routerHandlers, app);
applyMiddleware(errorHandlers, app);

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
