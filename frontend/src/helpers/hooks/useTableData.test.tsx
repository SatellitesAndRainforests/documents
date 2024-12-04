import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import React from 'react';
import useTableData from './useTableData';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

const TestComponent = () => {
  const { tables, error } = useTableData();
  return (
    <div>
      {error && <p>{error}</p>}
      {!error && tables.length === 0 && <p>Loading...</p>}
      {tables.map((table) => (
        <p key={table}>{table}</p>
      ))}
    </div>
  );
};

describe('useTableData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with no tables and no error', async () => {
    render(<TestComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('should fetch tables successfully', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: { tables: ['Table1', 'Table2'] } });

    await act(async () => {
      render(<TestComponent />);
    });

    expect(screen.getByText('Table1')).toBeInTheDocument();
    expect(screen.getByText('Table2')).toBeInTheDocument();
  });

  test('should handle fetch error', async () => {
    mockAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    await act(async () => {
      render(<TestComponent />);
    });

    expect(screen.getByText(/Failed to fetch tables/i)).toBeInTheDocument();
  });
});
