import json
from services.documents_service import DocumentsService

from utils.decorators.ensure_env_var import ensure_environment_variables


@ensure_environment_variables( names=["DOCUMENTS_TABLE"])
def lambda_handler(event, context):

    try:

        service = DocumentsService()
        response = service.retrieve_all_documents()

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": json.dumps({"documents": response}),
        }
    except Exception as e:
        print(f"Error: {e}")
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": json.dumps({"error": str(e)}),
        }


