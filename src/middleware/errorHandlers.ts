import { Request, Response, NextFunction, Router, request } from "express";
import * as ErrorHandler from "../utils/ErrorHandler";

const handle404Error = (app: Router) => {
  app.use(() => {
    ErrorHandler.notFoundError();
  });
};

const handleClientError = (app: Router) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerError = (app: Router) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
