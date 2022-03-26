const { exec } = require('child_process');
const { configFile } = require('./utils/obtainConfigFile');
const folderName = configFile.folderContainer;

exec(`feh -z --bg-center ${folderName}/*`, (error, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    exec(`notify-send ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    exec(`notify-send ${stderr}`);
    return;
  }
});
