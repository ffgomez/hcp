FROM arm32v7/node

## Rclone configurations
ENV RMOUNT=alcazar
ENV RCHECKERS=3
ENV RUID=1000

## Install dependences and samba+nfs
RUN apt-get update
RUN apt-get install -y apt-utils wget fuse 

## Install rclone
RUN wget https://downloads.rclone.org/rclone-current-linux-arm.deb
RUN dpkg -i rclone-current-linux-arm.deb

## Install cloudcmd 
RUN npm i cloudcmd -g

## Install samba + nfs 
RUN apt-get install -y libpopt0 python-crypto 
RUN apt-get install -y samba samba-common 
RUN apt-get install -y nfs-common

## Setup the dependences for the remote mount
CMD mkdir -p /rclone/mount/${RMOUNT}
EXPOSE 8000

## Create rclone mount with cloudcmd + nfs + smb
ENTRYPOINT exec alcazar.sh
