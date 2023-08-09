import './App.css';

import Home from './Home';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Reservations from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

/** @jsxImportSource react */

function App() {
  return (
    <BrowserRouter>
      <meta name="og:title" content="Little Lemon restaurant" />
      <meta name="og:description" content="serving Italian food since 2019" />
      <meta name="og:image" content="" />
      <header></header>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order" element={<Order />} />
          <Route path="confirmedbooking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
