#! /bin/bash

# rclone mount
rclone mount -vv \
        ${RMOUNT}:/rclone/mount/${RMOUNT} \
        --config /rclone/rclone.conf \
        --allow-other --uid ${RUID} --gid ${RUID} --allow-non-empty \
        --checkers ${RCHECKERS} \
        --tpslimit ${RCHECKERS} \
        --transfers ${RCHECKERS} \
        # vfs OPTS
        --vfs-cache-mode full \
        --cache-dir /rclone/cache \
        --vfs-cache-max-age 48h \
        --vfs-cache-poll-interval 10h \
        --vfs-cache-max-size 1G \
        --vfs-read-chunk-size 10M \
        --vfs-read-chunk-size-limit off \
        --timeout 1h \
        --dir-cache-time 96h \
        --buffer-size 256M \
        --drive-chunk-size 32M &

# cloudcmd
/usr/local/lib/node_modules/cloudcmd/bin/cloudcmd.js --root /rclone/mount 

# NFS server
#service nfs-kernel-server restart

# SMB server
#

##Opciones futuras
        ## Cache OPTS
        #"--cache-remote", "${RMOUNT}",
        #"--cache-info-age", "90h",
        #"--cache-chunk-size", "0M",
        #"--cache-chunk-total-size", "1G",
        #"--cache-db-path", "/rclone/cache.db",
        #"--cache-chunk-path", "/rclone/chunk",
        #"--cache-tmp-upload-path", "/rclone/upload",
        #"--cache-tmp-wait-time", "1h"
 
 
