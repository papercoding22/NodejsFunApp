import express, { Request, Response, Router } from "express";
import { getPlacesByName } from "./SearchController";
import { applyRoutes } from "../../utils";

const searchRouter = express.Router();

const routes = [
  {
    path: "/",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        // const result = await getPlacesByName(query.q as string);
        res.status(200).send("HelloWorld");
      },
    ],
  },
];

applyRoutes(routes, searchRouter);

const handleSearchRouter = (router: Router) => {
  router.use("/api/v1/search", searchRouter);
};

export default handleSearchRouter;
