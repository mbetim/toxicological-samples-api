class HttpException extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
