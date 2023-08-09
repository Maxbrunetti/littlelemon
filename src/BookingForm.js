import React from 'react';
import './BookingForm.css';
import useSubmit from './hooks/useSubmit';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

function BookingForm({
  formValues,
  setFormValues,
  handleSubmit,
  state,
  formik,
}) {
  const { isLoading } = useSubmit();

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
    <form className={'bookingForm'} onSubmit={handleSubmit}>
      <FormControl
        className={'formControl'}
        isInvalid={formik.touched.date && formik.errors.date}
      >
        <FormLabel className={'formLabel'} htmlFor="date">
          Choose date
        </FormLabel>
        <Input
          className={'inputField'}
          type="date"
          id="date"
          value={formValues.date}
          onChange={e => setFormValues({ ...formValues, date: e.target.value })}
          {...formik.getFieldProps('date')}
        />
        <FormErrorMessage className={'errorMessage'}>
          {formik.errors.date}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        className={'formControl'}
        isInvalid={formik.touched.time && formik.errors.time}
      >
        <FormLabel className={'formLabel'} htmlFor="time">
          Choose time
        </FormLabel>
        <Select
          className={'selectField'}
          id="time"
          value={formValues.time}
          onChange={e => setFormValues({ ...formValues, time: e.target.value })}
          {...formik.getFieldProps('time')}
        >
          <option value="">Select a time</option>
          {availableTimeOptions}
        </Select>
        <FormErrorMessage className={'errorMessage'}>
          {formik.errors.time}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        className={'formControl'}
        isInvalid={formik.touched.guests && formik.errors.guests}
      >
        <FormLabel className={'formLabel'} htmlFor="guests">
          Number of guests
        </FormLabel>
        <Input
          className={'inputField'}
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
        <FormErrorMessage className={'errorMessage'}>
          {formik.errors.guests}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        className={'formControl'}
        isInvalid={formik.touched.occasion && formik.errors.occasion}
      >
        <FormLabel className={'formLabel'} htmlFor="occasion">
          Occasion
        </FormLabel>
        <Select
          className={'selectField'}
          id="occasion"
          value={formValues.occasion}
          onChange={e =>
            setFormValues({ ...formValues, occasion: e.target.value })
          }
          {...formik.getFieldProps('occasion')}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Select>
        <FormErrorMessage className={'errorMessage'}></FormErrorMessage>
      </FormControl>

      <Button type="submit" isLoading={isLoading} className="btn">
        Submit
      </Button>
    </form>
  );
}

export default BookingForm;
