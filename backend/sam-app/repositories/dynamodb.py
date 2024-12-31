
import boto3
from repositories.base.db import BaseDb

class DynamoDb(BaseDb):
    
    def __init__(self):
        
        self.client = boto3.resource(
            'dynamodb',
            endpoint_url='http://dynamodb-local:8000' 
        )


    def read_all_table_names(self):
        client = boto3.client('dynamodb', endpoint_url='http://dynamodb-local:8000')
        response = client.list_tables()
        return response.get("TableNames", [])


    def retrieve_all_documents(self):

        table = self.client.Table('Documents')
        response = table.scan()

        return response.get("Items", [])
        
