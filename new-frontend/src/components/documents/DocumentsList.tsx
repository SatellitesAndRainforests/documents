import React from 'react';

interface Document {
  Id: string;
  Filename: string;
  Url: string;
}

interface DocumentsListProps {
  documents : Document[];
  onSelect: (url: string) => void;
}

const DocumentsList: React.FC<DocumentsListProps> = ({ documents, onSelect }) => {

  if (!documents.length) return <p>loading documents</p>;

  return (
    <ul>
      { documents.map( (document) => (
          <li key={document.Id}>
            filename: {document.Filename} , url:{document.Url} 
            <button 
              style={{marginLeft: '10px'}}
              onClick={() => onSelect('../../../' + document.Url)}
            >
              View
            </button>
          </li>
        ))
      }
    </ul>
  );

};


export default DocumentsList;


