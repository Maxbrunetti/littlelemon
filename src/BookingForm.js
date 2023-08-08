import React from 'react';
import './BookingForm.css';

function BookingForm({
  formValues,
  setFormValues,
  handleSubmit,
  availableTimes,
}) {
  const selectedDate = availableTimes.find(
    date => date.date === formValues.date
  );
  const availableTimeOptions = selectedDate
    ? Object.keys(selectedDate)
        .filter(key => key !== 'date' && selectedDate[key])
        .map(key => (
          <option key={key} value={key}>
            {key.slice(0, 2) + key.slice(2)}
          </option>
        ))
    : [];

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
        id="res-time"
        value={formValues.time}
        onChange={e => setFormValues({ ...formValues, time: e.target.value })}
      >
        <option value="">Select a time</option>
        {availableTimeOptions}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formValues.guest}
        onChange={e => setFormValues({ ...formValues, guest: e.target.value })}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formValues.occasion}
        onChange={e =>
          setFormValues({ ...formValues, occasion: e.target.value })
        }
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
