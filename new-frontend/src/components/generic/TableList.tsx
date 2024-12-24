import React from 'react';

interface TableListProps {
  tables: string[];
}

const TableList: React.FC<TableListProps> = ({ tables }) => {

  if (!tables.length) return <p>loading tables</p>;

  return (
    <ul>
      { tables.map( (table, index) => (
          <li key={index}>{table}</li>
        ))
      }
    </ul>
  );

};


export default TableList;




