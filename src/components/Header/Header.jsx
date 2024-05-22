import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1>ACG Renovations</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </header>
  )
}
