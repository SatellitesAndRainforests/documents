docker ps -aq -f "status=exited" | xargs docker rm

