import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import BookingForm from '../BookingForm';

test('renders BookingForm component', () => {
  render(<BookingForm />);
  const submitButton = screen.getByText('Submit');
  expect(submitButton).toBeInTheDocument();
});
