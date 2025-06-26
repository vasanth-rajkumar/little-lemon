import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm';

test('renders ReservationForm', () => {
  render(<ReservationForm />);
  
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});

test('shows validation errors for invalid input', () => {
  render(<ReservationForm />);
  
  fireEvent.click(screen.getByText(/reserve/i));
  
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/valid email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  expect(screen.getByText(/number of guests must be a positive number/i)).toBeInTheDocument();
});
