export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

export class UnAuthorised extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

export class Conflict extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}
