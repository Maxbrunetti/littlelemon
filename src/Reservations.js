import { useState, useReducer } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import BookingForm from './BookingForm';
import useSubmit from './hooks/useSubmit';
import { useNavigate } from 'react-router-dom';

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
  console.log(state);
  return newState;
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

function Reservations() {
  const { submit } = useSubmit();

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initializeTimes());

  // useEffect(() => {
  //   const storedData = localStorage.getItem('data');
  //   if (storedData) {
  //     dispatch(JSON.parse(storedData));
  //   }
  // }, []);

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
    date: formatDate(new Date()),
    time: '',
    guest: 1,
    occasion: '',
  });

  const formik = useFormik({
    initialValues: {
      date: formValues.date,
      time: formValues.time,
      guests: formValues.guest,
      occasion: formValues.occasion,
    },
    onSubmit: values => {
      submit('/', values);
    },

    validationSchema: Yup.object({
      date: Yup.string()
        .required('Date required')
        .matches(
          /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
          'Reservation date must be DD-MM-YYYY'
        ),
      time: Yup.string()
        .required('Choose a time')
        .matches(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
      guests: Yup.string()
        .required('Required')
        .min(1, 'Minimum number of guests is 1')
        .max(10, 'Maximum number of guests is 20'),
      occasion: Yup.string().required('Required'),
    }),
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      dispatch(formValues);
      localStorage.setItem('data', JSON.stringify(state));
      navigate('/confirmedbooking');
    }, 1000);
  }
  return (
    <BookingForm
      formValues={formValues}
      setFormValues={setFormValues}
      handleSubmit={handleSubmit}
      state={state}
      formik={formik}
    />
  );
}

export default Reservations;
