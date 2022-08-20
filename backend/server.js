// https://youtu.be/-0exw-9YJBo?t=1797
const dotenv = require('dotenv').config();

const express = require('express');
const path = require('path')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { errorHandler } = require('./middleware/error-middleware');

const PORT = process.env.PORT || 5000;
const server = express();

const options = {};

// ! access.log
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
});

// ! logging
server.use(morgan('tiny'));
server.use(morgan('combined', { stream: accessLogStream }));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


// ! body parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }))

// ! Base Routes
server.use("/api/v1/goals", require('./routes/goal-route'));

// ! error handler : add it after all routes else will not work
server.use(errorHandler);

try {
  server.listen(PORT, () => console.log(`server is listening on ${PORT}`))
} catch (error) {
  console.error(`Error : ${error}`)
}
