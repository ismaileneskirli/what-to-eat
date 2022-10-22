//TODO: seperate middlewares later
function notFound(req, res, next) {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  const statusCode = 200 ? 500 : res.statusCode;
  res.json({
    message: error.message,
    // hide stack for security purposes
    stack: process.env.NODE_ENV == 'production' ? '😅' : error.stack,
    status: statusCode,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
