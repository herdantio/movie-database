
echo "build and run container"
docker-compose up -d --build
echo "finished building & running"

echo "Migration started"
docker exec server npm run migrate
echo "Migration finished"