import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import BookingForm from '../BookingForm';

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const submitButton = screen.getByText('Make Your reservation');
  expect(submitButton).toBeInTheDocument();
});

// Add more test cases as needed
