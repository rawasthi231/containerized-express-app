import express from "express";

import Request from "../server/Request";

type StatusKeys =
  | "CONTINUE"
  | "SWITCHING_PROTOCOLS"
  | "PROCESSING"
  | "EARLY_HINTS"
  | "OK"
  | "CREATED"
  | "ACCEPTED"
  | "NON_AUTHORITATIVE_INFORMATION"
  | "NO_CONTENT"
  | "RESET_CONTENT"
  | "PARTIAL_CONTENT"
  | "MULTI_STATUS"
  | "MULTIPLE_CHOICES"
  | "MOVED_PERMANENTLY"
  | "MOVED_TEMPORARILY"
  | "SEE_OTHER"
  | "NOT_MODIFIED"
  | "USE_PROXY"
  | "TEMPORARY_REDIRECT"
  | "PERMANENT_REDIRECT"
  | "PAYMENT_REQUIRED"
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "METHOD_NOT_ALLOWED"
  | "NOT_ACCEPTABLE"
  | "PROXY_AUTHENTICATION_REQUIRED"
  | "REQUEST_TIMEOUT"
  | "CONFLICT"
  | "GONE"
  | "LENGTH_REQUIRED"
  | "PRECONDITION_FAILED"
  | "REQUEST_TOO_LONG"
  | "REQUEST_URI_TOO_LONG"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "REQUESTED_RANGE_NOT_SATISFIABLE"
  | "EXPECTATION_FAILED"
  | "IM_A_TEAPOT"
  | "INSUFFICIENT_SPACE_ON_RESOURCE"
  | "METHOD_FAILURE"
  | "MISDIRECTED_REQUEST"
  | "UNPROCESSABLE_ENTITY"
  | "LOCKED"
  | "FAILED_DEPENDENCY"
  | "TOO_EARLY"
  | "UPGRADE_REQUIRED"
  | "PRECONDITION_REQUIRED"
  | "TOO_MANY_REQUESTS"
  | "REQUEST_HEADER_FIELDS_TOO_LARGE"
  | "UNAVAILABLE_FOR_LEGAL_REASONS"
  | "INTERNAL_SERVER_ERROR"
  | "NOT_IMPLEMENTED"
  | "BAD_GATEWAY"
  | "SERVICE_UNAVAILABLE"
  | "GATEWAY_TIMEOUT"
  | "HTTP_VERSION_NOT_SUPPORTED"
  | "VARIANT_ALSO_NEGOTIATES"
  | "INSUFFICIENT_STORAGE"
  | "LOOP_DETECTED"
  | "NOT_EXTENDED"
  | "NETWORK_AUTHENTICATION_REQUIRED";

export type HttpStatus = {
  [key in StatusKeys]: {
    code: number;
    message: string;
  };
};

export interface IControllerResponse<T = undefined> {
  message: string;
  success: boolean;
  data?: T;
  status?: HttpStatus[keyof HttpStatus];
}

export type RequestWrapper = (
  fn: (request: Request) => IControllerResponse
) => (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
