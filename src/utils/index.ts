import { NextFunction, Router } from "express";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middlewareWrapper: Wrapper[], app: Router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(app);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const {method, path, handler } = route;
    
  }
}
