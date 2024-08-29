import Request from "../server/Request";

import { HTTP_STATUS } from "../utils/httpStatusCodes";

export default class UserController {
  public static users(request: Request) {
    return {
      success: true,
      status: HTTP_STATUS.OK,
      message: "Response from users",
    };
  }
}
