## Local volume mount hierarchy
```
 rclone/ 
   rclone.conf 
   cache.db 
   cache/ 
   chunk/ 
   upload/ 
   mount/ 
     "${RMOUNT}"/  
     download/ 
```

## mumie
```
docker run -d --name rclone-mount \
    --restart=unless-stopped \
    --cap-add SYS_ADMIN \
    --device /dev/fuse \
    --security-opt apparmor:unconfined \
    -e RemotePath="alcazar:" \
    -e MountCommands="--allow-other --allow-non-empty" \
    -v  /storage/.config/rclone:/config \
    -v /media/alcazar:/mnt/mediaefs:shared \
    mumie/rclone-mount
```
