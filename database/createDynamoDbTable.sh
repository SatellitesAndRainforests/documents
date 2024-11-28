aws dynamodb create-table \
    --table-name wildlifeCaptures \
    --attribute-definitions AttributeName=wildlifeCaptureId,AttributeType=S \
    --key-schema AttributeName=wildlifeCaptureId,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --endpoint-url http://localhost:8000

