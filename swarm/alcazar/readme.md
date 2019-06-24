# Local volume mount hierarchy
 rclone/
   rclone.conf
   cache.db
   cache/
   chunk/
   upload/
   mount/
     "${RMOUNT}"/
     torrent/


# Docker run
docker run -it -d \
  --name rclone \
  --cap-add SYS_ADMIN \
  --device /dev/fuse \
  --security-opt apparmor:unconfined \
  -e "RMOUNT:alcazar" \
  -v "rclone:/rclone" \
  -p 8001:8000 \
 rclone


# Descartes
 -v "rclone:/rclone:shared" \
--mount type=bind,source=/media/alcazar,target=/rclone \      
   --privileged \
     --device "/dev/fuse:/dev/fuse" \
