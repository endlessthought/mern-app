// const dotenv = require('dotenv').config();

const errorHandler = (err, req, res, next) => {

  console.error("Error Handler")

  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
  next()
}

module.exports = { errorHandler };