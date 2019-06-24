FROM arm32v7/node

###################
## ENV           ##
###################
## Rclone configurations
ENV RMOUNT=alcazar
ENV RCHECKERS=3
ENV RUID=1000
#VOLUME /rclone/mount/${RMOUNT}

## SMB conf
ENV SWG londres.casa

###################
## INSTALL       ##
###################
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
RUN apt-get install -y samba 
RUN apt-get install -y samba-common 
RUN apt-get install -y nfs-common

## Add entrypoint
COPY alcazar.sh /root/alcazar.sh

###################
## CONFIG        ##
###################
## cloudcmd 
EXPOSE 8000

## rclone
CMD mkdir -p /rclone/mount/${RMOUNT}

## nfs
CMD echo "/rclone/mount/ *(ro,fsid=0,insecure,no_subtree_check,async)" >> /etc/exports

## smb
COPY smb.conf /etc/samba/smb.conf 
  
###################
## ENTRYPOINT    ##
###################
ENTRYPOINT exec /root/alcazar.sh
