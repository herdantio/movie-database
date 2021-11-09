if [[ $1 == "all" ]]
then
  printf 'Running All Docker Service \n'
  echo "build and run container"
  docker-compose up -d --build
  echo "finished building & running"
else
    printf 'Running Only Backend Docker Service \n'
  echo "build and run container"
  docker-compose up -d --build server postgres
  echo "finished building & running"
fi

echo "Migration started"
docker exec server npm run migrate
echo "Migration finished"

echo "Seeding started"
docker exec server npm run seed
echo "Seeding finished"