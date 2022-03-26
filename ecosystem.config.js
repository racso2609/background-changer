const { configFile } = require('./utils/obtainConfigFile');
const timestamp = configFile.timeStamp || '*/30 * * * * *';

module.exports = {
  apps: [
    {
      script: 'index.js',
      name: 'backgroundChanger',
      cron_restart: timestamp,
    },
  ],
};
