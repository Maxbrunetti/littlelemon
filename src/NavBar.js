import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import ConfirmedBooking from './ConfirmedBooking';
function NavBar() {
  return (
    <nav className="nav w60 g1fr">
      <img className="nav-logo" src="" alt="logo" />
      <ul className="nav-items">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="nav-item">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-item">
            Order online
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </nav>
  );
}
// function NavBar() {
//   return (
//     <nav className="nav w60 g1fr">
//       <img className="nav-logo" src="" alt="logo" />
//       <ul className="nav-items">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/">About</a>
//         </li>
//         <li>
//           <a href="/">Menu</a>
//         </li>
//         <li>
//           <a href="/">Reservations</a>
//         </li>
//         <li>
//           <a href="/">Order online</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default NavBar;
