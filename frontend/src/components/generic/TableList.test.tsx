import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableList from './TableList';
import React from 'react';

test('renders loading message when tables array is empty', () => {
  const { getByText } = render(<TableList tables={[]} />);
  expect(getByText(/loading tables/i)).toBeInTheDocument();
});

test('renders list of tables when tables array is populated', () => {
  const mockTables = ['Table1', 'Table2'];
  const { getByText } = render(<TableList tables={mockTables} />);
  expect(getByText(/Table1/i)).toBeInTheDocument();
  expect(getByText(/Table2/i)).toBeInTheDocument();
});

