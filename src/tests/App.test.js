import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the page header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Surreal Estate/i);
  expect(headerElement).toBeInTheDocument();
});
