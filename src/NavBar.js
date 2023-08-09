import { Link } from 'react-router-dom';

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
    </nav>
  );
}

export default NavBar;
