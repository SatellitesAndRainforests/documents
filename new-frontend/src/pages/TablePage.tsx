import React from 'react';
import useTableData from '../helpers/hooks/useTableData';
import TableList from '../components/generic/TableList';
import ErrorMessage from '../components/generic/ErrorMessage';
import MapLeaf from '../components/map/MapLeaf';

const TablePage = () => {

  const { tables, error } = useTableData();

  return (

    <div>
      <h1> Available DynamoDb Tables </h1>
      <ErrorMessage error={error} />
      <TableList tables={tables} />

      <MapLeaf />

    </div>

  );

};

export default TablePage;

