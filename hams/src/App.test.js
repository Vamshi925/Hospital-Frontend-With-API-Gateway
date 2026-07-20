import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hospital management system title', () => {
  render(<App />);
  expect(
    screen.getByText(/Hospital Appointment and Management System/i)
  ).toBeInTheDocument();
});

