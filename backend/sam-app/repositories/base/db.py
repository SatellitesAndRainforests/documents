
from abc import ABC, abstractmethod

class BaseDb(ABC):

    @abstractmethod
    def read_all_table_names(self):
        pass
    

