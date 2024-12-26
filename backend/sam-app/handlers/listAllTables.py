import json
from services.documents_service import DocumentsService


def lambda_handler(event, context):

    try:

        service = DocumentsService()
        response = service.read_all_table_names()

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({ "tables": response })
        }
    

    except Exception as e:

        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({"error": str(e)})
        }

