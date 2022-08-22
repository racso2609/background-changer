sudo rm -r "$HOME/.local/share/background-changer"

INITIAL_PATH="$HOME"
INSTALL_PATH=(".local" 'share' 'background-changer')

for i in "${INSTALL_PATH[@]}"
do
  echo $i
  INITIAL_PATH="$INITIAL_PATH/$i"
  if [[ ! -d "$INITIAL_PATH" ]]; then
    echo "create $i"
    mkdir $INITIAL_PATH
  fi
done

echo "copying to app to $INITIAL_PATH"
echo '========='
npm i 
sudo cp -r ./* $INITIAL_PATH
echo '========='

cd $INITIAL_PATH

pm2 start ./ecosystem.config.js

CONFIG_PATH="$HOME/.config/background-changer"
if [[ ! -d "$CONFIG_PATH" ]]; then
  echo "creating config file"
  mkdir $CONFIG_PATH
else
  rm -r $CONFIG_PATH
  mkdir $CONFIG_PATH
fi

echo $CONFIG_PATH

echo '========='
echo "copying to $CONFIG_PATH"
cp config.json $CONFIG_PATH
echo '========='
