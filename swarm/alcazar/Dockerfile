Dockerfile

FROM arm32v7/node

## Rclone configurations
# Remote cache name as defined in rclone.conf
ENV RMOUNT=alcazar
# Remote number of threads
ENV RCHECKERS=3    
# UID and GID to use as rclone
ENV RUID=1000

## Mounting external volumes
VOLUME /rclone

## Install dependences
RUN apt-get update
RUN apt-get install -y apt-utils wget fuse 

## Install rclone
RUN wget https://downloads.rclone.org/rclone-current-linux-arm.deb
RUN dpkg -i rclone-current-linux-arm.deb

## Excute rclone mount
ENTRYPOINT exec rclone mount -vv \
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
        --drive-chunk-size 32M \
        ## Cache OPTS
        #"--cache-remote", "${RMOUNT}",
        #"--cache-info-age", "90h",
        #"--cache-chunk-size", "0M",
        #"--cache-chunk-total-size", "1G",
        #"--cache-db-path", "/rclone/cache.db",
        #"--cache-chunk-path", "/rclone/chunk",
        #"--cache-tmp-upload-path", "/rclone/upload",
        #"--cache-tmp-wait-time", "1h"
        ]