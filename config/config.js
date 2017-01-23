var path = require('path'),
    cfenv = require('cfenv'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    app: {
      name: 'node-app'
    },
    port: process.env.PORT || 3000,
    db: cfenv.getAppEnv().getService('db-small').credentials.uri;
};
