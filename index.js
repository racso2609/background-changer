const { exec } = require('child_process');

exec('feh -z --bg-center ~/wallpapers/*', (error, stdout, stderr) => {
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
