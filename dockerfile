FROM centos:7.6




## Install packages

RUN wget http://www.kraxel.org/repos/firmware.repo
## Install packages 
RUN yum -y --enablerepo=epel update upgrade 
RUN yum install qemu qemu-env OVMF
#RUN borrar repos y paquetes

yum install edk2.git-ovmf-x64 -y

qemu-system-x86_64 -L . -boot d -cdrom customUbuntu.iso 


ENTRYPOINT qemu-system-i386 -vnc :1 -m 32M -drive file=freedos.img,media=disk,format=raw -drive file=FD12CD.iso,media=cdrom -boot order=d



ENTRYPOINT bash
