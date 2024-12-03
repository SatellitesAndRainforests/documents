import { render, screen } from '@testing-library/react';
import App from './App';

test('displays tables', () => {
  render(<App />);
  const linkElement = screen.getByText(/Available DynamoDb Tables/i);
  expect(linkElement).toBeInTheDocument();
});

