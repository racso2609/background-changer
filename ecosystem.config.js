const { configFile } = require('./utils/obtainConfigFile');
const timestamp = configFile.timeStamp || '*/30 * * * * *';
const path = require('path');

module.exports = {
  apps: [
    {
      script: path.join(__dirname, 'index.js'),
      name: 'backgroundChanger',
      cron_restart: timestamp,
    },
  ],
};
