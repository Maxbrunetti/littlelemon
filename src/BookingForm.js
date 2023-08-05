import './BookingForm.css';
import { useState } from 'react';

function BookingForm({
  formValues,
  setFormValues,
  handleSubmit,
  availableTimes,
}) {
  function availableTime() {
    const selectedDate = availableTimes.find(
      value => value.date === formValues.date
    );
    console.log(selectedDate);

    return (
      <>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </>
    );
  }

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formValues.date}
        onChange={e => setFormValues({ ...formValues, date: e.target.value })}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        onChange={e => {
          setFormValues({ ...formValues, time: e.target.value });
          console.log(formValues);
        }}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={e => setFormValues({ ...formValues, guest: e.target.value })}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={e => {
          setFormValues({ ...formValues, occasion: e.target.value });
          console.log(formValues);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
