/** @format */

import { CustomError } from "./custom-error";

export class MyOwnError extends CustomError {
  statusCode = 400;

  constructor() {
    super("this is my own error");
    Object.setPrototypeOf(this, MyOwnError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "This is my own error",
        field: "my own field",
      },
    ];
  }
}
