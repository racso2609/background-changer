const fs = require('fs');
const { exec } = require('child_process');
const posibleLocation = ['~/.config/racPaper/config.json', './config.json'];

const validateConfigFile = (file) => {
  if (!file) {
    throw new Error('please create a config file');
  }
  const { folderContainer } = file;
  if (!folderContainer)
    throw new Error('please specify the location of your pictures');
};

const getAvaliableConfig = () => {
  try {
    let file = null;
    for (const filePath of posibleLocation) {
      const fileExists = fs.existsSync(filePath);
      if (fileExists) {
        file = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        file = JSON.parse(file);
        break;
      }
    }
    validateConfigFile(file);
    return file;
  } catch (e) {
    exec(`notify-send  ${e.message}`);
    throw e;
  }
};

module.exports = {
  posibleLocation,
  configFile: getAvaliableConfig(),
};
