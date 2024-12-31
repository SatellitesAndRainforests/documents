
from abc import ABC, abstractmethod

class BaseDocumentsService(ABC):
    
    @abstractmethod
    def read_all_table_names(self):
        pass
    
    @abstractmethod
    def retrieve_all_documents(self):
        pass
 
