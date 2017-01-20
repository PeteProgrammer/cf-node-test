var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-app'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-app-production'
  }
};

console.log("Services content: ", process.env.VCAP_SERVICES)
svc = JSON.parse(process.env.VCAP_SERVICES)
config[env].db = svc['p-mysql'][0].credentials.uri

module.exports = config[env];
