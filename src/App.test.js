import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hello World/i);
  expect(titleElement).toBeInTheDocument();
});
