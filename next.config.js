const environment = process.env.NODE_ENV || 'develop';
const property = require(`./env.${environment}.js`);

module.exports = {
  env: property
};
