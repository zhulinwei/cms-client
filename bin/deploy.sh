CONTAINER_NAME="cms-client"
CONTAINER_ID=$(docker ps -a | grep "${CONTAINER_NAME}" | awk '{print $1}')
CONTAINER_PORT=3452
IMAGE_TAG=$1
IMAGE_NAME="registry.cn-hangzhou.aliyuncs.com/zhulinwei/cms_client:${IMAGE_TAG}"
if [ "${CONTAINER_ID}" != "" ];then
  docker stop ${CONTAINER_NAME}
  docker rm ${CONTAINER_NAME}
fi
  docker run -d -p ${CONTAINER_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}
