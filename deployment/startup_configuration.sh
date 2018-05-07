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

wget https://nodejs.org/dist/v8.11.1/node-v8.11.1-linux-armv6l.tar.xz
tar -xvf node-v8.11.1-linux-armv6l.tar.xz
cp -R node-v8.11.1-linux-armv6l/* /usr/local/
rm -r node-v8.*

reboot

EOF
