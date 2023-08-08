import { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';
import { useNavigate, Route, Routes } from 'react-router-dom';

import ConfirmedBooking from './ConfirmedBooking';

function reducer(state, action) {
  const newState = state.map(date => {
    if (date.date === action.date) {
      return {
        ...date,
        [action.time]: false,
      };
    }

    return date;
  });

  return newState;
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

function Reservations() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initializeTimes());

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      dispatch(JSON.parse(storedData));
    }
  }, []);

  function initializeTimes() {
    const today = new Date();
    const times = [];
    for (let i = 0; i < 14; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(nextDay.getDate() + i);
      const datestr = formatDate(nextDay);

      times.push({
        date: datestr,
        '17:00': true,
        '18:00': true,
        '19:00': true,
        '20:00': true,
        '21:00': true,
        '22:00': true,
      });
    }
    return times;
  }

  const [formValues, setFormValues] = useState({
    date: '',
    time: '',
    guest: '',
    occasion: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(formValues);
    localStorage.setItem('data', JSON.stringify(state));
    navigate('/confirmedbooking');
  }

  return (
    <Routes>
      <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
      <Route
        path="/"
        element={
          <BookingForm
            formValues={formValues}
            setFormValues={setFormValues}
            handleSubmit={handleSubmit}
            state={state}
          />
        }
      />
    </Routes>
  );
}

export default Reservations;
