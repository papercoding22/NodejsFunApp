import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

export const handleCors = (app: Router) => {
  app.use(cors({ credentials: true, origin: true }));
};

export const handleBodyRequestParsing = (app: Router) => {
  app.use(parser.urlencoded({ extended: true }));
  app.use(parser.json());
};

export const handleCompression = (app: Router) => {
  app.use(compression());
};
