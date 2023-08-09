import './App.css';

import Home from './Home';
import About from './About';
import Menu from './Menu';
import Delivery from './Delivery';
import Reservations from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

/** @jsxImportSource react */

function App() {
  return (
    <BrowserRouter>
      <meta name="og:title" content="Little Lemon restaurant" />
      <meta name="og:description" content="serving Italian food since 2013" />
      <meta name="og:image" content="" />
      <header></header>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="confirmedbooking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <footer>
        <p>©Little Lemon 2023</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
