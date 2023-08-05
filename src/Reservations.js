import BookingForm from './BookingForm';
import { useReducer, useState, useEffect } from 'react';

function reducer(state, action) {
  const selectedDate = state.find(value => value.date === action.date);
  console.log(selectedDate);
  if (!selectedDate || !action.time) {
    return state;
  }
  if (action.time === '17:00') return (selectedDate.five = false);
  if (action.time === '18:00') return (selectedDate.six = false);
  if (action.time === '19:00') return (selectedDate.seven = false);
  if (action.time === '20:00') return (selectedDate.eight = false);
  if (action.time === '21:00') return (selectedDate.nine = false);
  if (action.time === '22:00') return (selectedDate.ten = false);
  return state;
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

function Reservations() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    function initializeTimes() {
      const today = new Date();
      const times = [];
      for (let i = 0; i < 14; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(nextDay.getDate() + i);
        const datestr = formatDate(nextDay);

        times.push({
          date: datestr,
          five: true,
          six: true,
          seven: true,
          eight: true,
          nine: true,
          ten: true,
        });
      }
      setAvailableTimes(times);
      console.log(times);
    }
    initializeTimes();
  }, []);

  const [state, times] = useReducer(reducer, availableTimes);

  function updateTimes(time) {
    return time;
  }

  const [formValues, setFormValues] = useState({
    date: '',
    time: '',
    guest: '',
    occasion: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    times(formValues);
    console.log(availableTimes);
  }

  return (
    <section>
      <BookingForm
        formValues={formValues}
        setFormValues={setFormValues}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
      />
    </section>
  );
}

export default Reservations;