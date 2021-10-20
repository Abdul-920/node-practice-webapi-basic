const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../docs/swaggerDef');

const router = express.Router();
// console.log(swaggerDefinition);

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['routes/*.js', 'docs/*.yml'],
});

// console.log('Specs', specs)
router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs)
);

module.exports = router;
