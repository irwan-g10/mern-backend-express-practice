class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // ad a 'message' property
    this.code = errorCode;
  }
}

module.exports = HttpError;
