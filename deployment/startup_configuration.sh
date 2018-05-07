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

reboot

EOF
