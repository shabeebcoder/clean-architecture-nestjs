#!/bin/bash
set -e

SERVER="my_database_server"
PW="password"
DB="assets"

echo "Stopping and removing old Docker container [$SERVER], and starting a new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

# Wait for PostgreSQL to start
echo "Sleeping to wait for pg-server [$SERVER] to start"
sleep 5

# Check if the server is running
if ! docker exec -i $SERVER pg_isready -U asset_user; then
  echo "PostgreSQL server is not ready. Exiting."
  exit 1
fi

# Create the database
echo "Creating database $DB"
docker exec -i $SERVER psql -U postgres -c "CREATE DATABASE $DB ENCODING 'UTF-8';"

# List databases to verify creation
docker exec -i $SERVER psql -U postgres -c "\l"