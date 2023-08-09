import React, { useEffect, useRef } from 'react';
import './BookingForm.css';
import * as Yup from 'yup';
import useSubmit from './hooks/useSubmit';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

function BookingForm({
  formValues,
  setFormValues,
  handleSubmit,
  state,
  formik,
}) {
  const { isLoading, response, submit } = useSubmit();

  const selectedDate = state.find(date => date.date === formValues.date);

  const availableTimeOptions = selectedDate
    ? Object.entries(selectedDate)
        .filter(value => value[0] !== 'date' && selectedDate[value[0]])
        .map(value => (
          <option key={Math.random()} disabled={!value[1]}>
            {value[0]}
          </option>
        ))
    : [];

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel htmlFor="date">Choose date</FormLabel>
        <Input
          type="date"
          id="date"
          value={formValues.date}
          onChange={e => setFormValues({ ...formValues, date: e.target.value })}
          {...formik.getFieldProps('date')}
        />
        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel htmlFor="time">Choose time</FormLabel>
        <Select
          id="time"
          value={formValues.time}
          onChange={e => setFormValues({ ...formValues, time: e.target.value })}
          {...formik.getFieldProps('time')}
        >
          <option value="">Select a time</option>
          {availableTimeOptions}
        </Select>
        <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formValues.guest}
          onChange={e =>
            setFormValues({ ...formValues, guest: e.target.value })
          }
          {...formik.getFieldProps('guests')}
        />{' '}
        <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <select
          id="occasion"
          value={formValues.occasion}
          onChange={e =>
            setFormValues({ ...formValues, occasion: e.target.value })
          }
          {...formik.getFieldProps('occasion')}
        >
          {/* <option value="">Select an occasion</option> */}
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>{' '}
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isLoading} // Consider using the isLoading state from useSubmit hook
      >
        Submit
      </Button>
    </form>
  );
}

export default BookingForm;
