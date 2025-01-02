#!/bin/bash

# Set environment variables
export DOCUMENTS_TABLE="Documents"
export DYNAMODB_ENDPOINT="http://localhost:8000"
export TEST_DOCUMENTS_DIR="../new-frontend/public/documents/"
export DOCUMENTS_DIR="documents"

# Ensure required environment variables are set
if [[ -z "$DOCUMENTS_TABLE" || -z "$DYNAMODB_ENDPOINT" || -z "$DOCUMENTS_DIR" ]]; then
    echo "One or more required environment variables are not set."
    echo "Ensure DOCUMENTS_TABLE, DYNAMODB_ENDPOINT, and DOCUMENTS_DIR are configured."
    exit 1
fi


# Create the DynamoDB table
aws dynamodb create-table \
    --table-name "$DOCUMENTS_TABLE" \
    --attribute-definitions AttributeName=Id,AttributeType=S \
    --key-schema AttributeName=Id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url "$DYNAMODB_ENDPOINT"

echo "Created DynamoDB table: $DOCUMENTS_TABLE"

# Add files to the DynamoDB table
for file in "$TEST_DOCUMENTS_DIR"/*.pdf; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        id=$(uuidgen)
        url="$DOCUMENTS_DIR/$filename"

        aws dynamodb put-item \
            --table-name "$DOCUMENTS_TABLE" \
            --item "{\"Id\": {\"S\": \"$id\"}, \"Filename\": {\"S\": \"$filename\"}, \"Url\": {\"S\": \"$url\"}}" \
            --endpoint-url "$DYNAMODB_ENDPOINT"
        
        echo "Added $filename to DynamoDB with URL $url"
    fi
done

# List all DynamoDB tables
aws dynamodb list-tables --endpoint-url "$DYNAMODB_ENDPOINT"

# Scan the DynamoDB table to verify the content
aws dynamodb scan \
    --table-name "$DOCUMENTS_TABLE" \
    --endpoint-url "$DYNAMODB_ENDPOINT"

