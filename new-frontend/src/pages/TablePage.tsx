import React from 'react';
import useTableData from '../helpers/hooks/useTableData';
import TableList from '../components/generic/TableList';
import ErrorMessage from '../components/generic/ErrorMessage';

const TablePage = () => {

  const { tables, error } = useTableData();

  return (

    <div>
      <h1> Available DynamoDb Tables </h1>
      <ErrorMessage error={error} />
      <TableList tables={tables} />

    </div>

  );

};

export default TablePage;

