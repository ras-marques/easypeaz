#!/bin/bash

sudo -s -- <<EOF

touch /home/pi/.hushlogin

apt-get update
apt-get --yes install vim
apt-get --yes install git

echo "syntax on
colorscheme elflord
set mouse=" > .vimrc

chown pi:pi .vimrc
chmod 600 .vimrc

echo "export EDITOR=vim" >> /etc/profile

wget https://cli-assets.heroku.com/branches/stable/heroku-linux-arm.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
tar -xvzf heroku-linux-arm.tar.gz -C /usr/local/lib
rm heroku-linux-arm.tar.gz
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

reboot

EOF
