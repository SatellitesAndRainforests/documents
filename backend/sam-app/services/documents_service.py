
from services.base.documents import BaseDocumentsService
from repositories.dynamodb import DynamoDb 

class DocumentsService(BaseDocumentsService):

    def __init__(self):
        self.repository = DynamoDb()
    
    def read_all_table_names(self):
        return self.repository.read_all_table_names()
    
    def retrieve_all_documents(self):
        return self.repository.retrieve_all_documents()
 

