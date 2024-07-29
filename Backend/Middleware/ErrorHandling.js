class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class UnAuthorised extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
module.exports = { NotFoundError, UnAuthorised, BadRequest };
