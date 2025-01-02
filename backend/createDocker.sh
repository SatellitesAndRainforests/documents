
docker network create sam-local-network
docker run -d --network sam-local-network --name dynamodb-local -p 8000:8000 amazon/dynamodb-local

