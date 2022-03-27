const { exec } = require('child_process');
const { configFile } = require('./utils/obtainConfigFile');
const path = require('path');
const { baseString, folderContainer } = configFile;
const folderName = path.join(baseString, folderContainer);

exec(`feh -z --bg-scale ${folderName}/*`, (error, stderr) => {
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
