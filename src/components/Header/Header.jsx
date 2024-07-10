import { Link } from 'react-router-dom';
import './Header.css';
import Estimate from '../Estimate/EstimateButton';


export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>ACG Renovations</h1>
      </Link>
      <nav>
        <ul>
            <Estimate />

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </header>
  )
}
