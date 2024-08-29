import express from "express";

import Request from "./Request";

import { RequestWrapper } from "../typings";
import { HTTP_STATUS } from "../utils/httpStatusCodes";

export const wrapper: RequestWrapper =
  (fn) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const request = new Request(req, res);
    // if (!request.userId) {
    //   return;
    // }
    const response = fn(request);
    const status = response.status ? response.status : HTTP_STATUS.OK;
    delete response.status;
    res.status(status.code).send(response);
  };
