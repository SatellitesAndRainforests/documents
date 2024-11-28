aws dynamodb put-item \
    --table-name wildlifeCaptures \
    --item '{"wildlifeCaptureId": {"S": "capture123"}, "s3Url": {"S": "https://example.com/capture123.pdf"}}' \
    --endpoint-url http://localhost:8000

