const { version } = require('../package.json');
// const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Usrati - A Child Habit Tracker',
    version,
  }
};

module.exports = swaggerDef;
