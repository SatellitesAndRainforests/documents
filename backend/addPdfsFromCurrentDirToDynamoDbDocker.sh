#!/bin/bash

DIR="."
DOCUMENTS_DIR="documents"
DYNAMODB_ENDPOINT="http://localhost:8000"
TABLE_NAME="Documents"

aws dynamodb create-table \
    --table-name Documents \
    --attribute-definitions AttributeName=Id,AttributeType=S \
    --key-schema AttributeName=Id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url http://localhost:8000 ;


for file in "$DIR"/*; do
    if [ -f "$file" ]; then

        filename=$(basename "$file")

        id=$(uuidgen)

        url="./$DOCUMENTS_DIR/$filename"

        aws dynamodb put-item \
            --table-name "$TABLE_NAME" \
            --item "{\"Id\": {\"S\": \"$id\"}, \"Filename\": {\"S\": \"$filename\"}, \"Url\": {\"S\": \"$url\"}}" \
            --endpoint-url "$DYNAMODB_ENDPOINT"
        
        echo "Added $filename to DynamoDB with URL $url"
    fi
done

