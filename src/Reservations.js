import { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';

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
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`
    )
      .then(response => response.json())
      .then(jsonData => setBtcData(jsonData))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
    console.log(btcData);
  }, []);

  const [availableTimes, setAvailableTimes] = useState([]);
  const [state, dispatch] = useReducer(reducer, availableTimes);

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
          '17:00': true,
          '18:00': true,
          '19:00': true,
          '20:00': true,
          '21:00': true,
          '22:00': true,
        });
      }
      setAvailableTimes(times);

      console.log(times);
    }
    initializeTimes();
  }, []);

  const [formValues, setFormValues] = useState({
    date: '',
    time: '',
    guest: '',
    occasion: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(formValues);
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
