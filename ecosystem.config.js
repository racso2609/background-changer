module.exports = {
  apps: [
    {
      script: 'index.js',
      name: 'backgroundChanger',
      cron_restart: '*/30 * * * * *',
    },
  ],
};
