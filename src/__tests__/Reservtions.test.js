import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Reservations from '../Reservations';

test('renders BookingForm component', () => {
  render(<Reservations />);
  const submitButton = screen.getByText('Make Your reservation');
  expect(submitButton).toBeInTheDocument();
});

// Add more test cases as needed
