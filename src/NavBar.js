import { Link, useLocation } from 'react-router-dom';
import logo from './images/little-lemon-logo.jpg';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="nav w60 g1fr">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-items">
        <li>
          <Link
            to="/"
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-item ${
              location.pathname === '/about' ? 'active' : ''
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className={`nav-item ${
              location.pathname === '/menu' ? 'active' : ''
            }`}
          >
            Menu
          </Link>
        </li>

        <li>
          <Link
            to="/reservations"
            className={`nav-item ${
              location.pathname === '/reservations' ? 'active' : ''
            }`}
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to="/delivery"
            className={`nav-item ${
              location.pathname === '/delivery' ? 'active' : ''
            }`}
          >
            Delivery
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
