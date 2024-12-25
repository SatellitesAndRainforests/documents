import boto3
import json

# Initialize the DynamoDB client with the local endpoint
dynamodb = boto3.client(
    'dynamodb',
    endpoint_url='http://dynamodb-local:8000'  # Local DynamoDB endpoint
)

def lambda_handler(event, context):
    try:
        # List all tables
        response = dynamodb.list_tables()
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "tables": response.get("TableNames", [])
            })
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({"error": str(e)})
        }

