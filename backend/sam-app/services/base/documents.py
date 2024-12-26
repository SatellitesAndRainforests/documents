
from abc import ABC, abstractmethod

class BaseDocumentsService(ABC):
    
    @abstractmethod
    def read_all_table_names(self):
        pass
    
