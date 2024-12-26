
import boto3
from repositories.base.db import BaseDb

class DynamoDb(BaseDb):
    
    def __init__(self):
        
        self.client = boto3.client(
            'dynamodb',
            endpoint_url='http://dynamodb-local:8000' 
        )


    def read_all_table_names(self):

        response = self.client.list_tables()

        return response.get("TableNames", [])


        
