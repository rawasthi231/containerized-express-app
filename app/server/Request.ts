import express from "express";

import { HTTP_STATUS } from "../utils/httpStatusCodes";

export default class Request {
  protected body: Record<string, any>;
  protected query: Record<string, any>;
  protected params: Record<string, any>;
  protected headers: Record<string, any>;

  protected response: express.Response;

  public userId?: number;

  constructor(
    { body = {}, query = {}, params = {}, headers = {} }: express.Request,
    response: express.Response
  ) {
    this.body = body;
    this.query = query;
    this.params = params;
    this.headers = headers;
    this.response = response;

    this.authenticate();
  }

  public getBody() {
    return this.body;
  }

  public getQuery() {
    return this.query;
  }

  public getParams() {
    return this.params;
  }

  public getHeaders() {
    return this.headers;
  }

  private authenticate() {
    const token = this.headers["authorization"];
    if (!token) {
      this.response
        .status(HTTP_STATUS.UNAUTHORIZED.code)
        .send(HTTP_STATUS.UNAUTHORIZED.message);
      return;
    }
    // Authenticate the token
    this.userId = 1;
  }
}
