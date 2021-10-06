import { render, screen } from '@testing-library/react';
import App from './App';

test('The document has register text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});
