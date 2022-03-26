const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const posibleLocation = ['/home/racso/.config/racPaper/config.json'];
const defaultFile = './config.json';

const validateConfigFile = (file) => {
  if (!file) {
    return 'please create a config file';
  }
  const { folderContainer, baseString } = file;
  if (!baseString) return 'provide a valid baseString';

  const fileExists = fs.existsSync(path.join(baseString, folderContainer));

  if (!folderContainer || !fileExists) {
    return 'please specify the location of your pictures';
  }

  return false;
};
const openFile = (filePath) => {
  let tempFile = fs.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r',
  });
  tempFile = JSON.parse(tempFile);

  return tempFile;
};

const getAvaliableConfig = () => {
  try {
    let file = null;
    for (const filePath of posibleLocation) {
      const fileExists = fs.existsSync(filePath);
      if (fileExists) {
        let tempFile = openFile(filePath);
        if (!validateConfigFile(tempFile)) {
          file = tempFile;
          break;
        }
      }
    }
    if (!file) file = openFile(defaultFile);

    const hasError = validateConfigFile(file);
    if (hasError) throw new Error(hasError);

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
