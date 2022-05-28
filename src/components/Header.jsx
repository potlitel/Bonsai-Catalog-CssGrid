import { Link } from 'react-router-dom';
import '../header.css';
//https://codepen.io/gillescastel/pen/qRxZQa

export function Header() {
  return (
    <header>
      <h1>Bonsais</h1>
      <nav>
        <Link to='/' style={{ textDecoration: 'none' }}>First tab</Link>
        <Link to='/' style={{ textDecoration: 'none' }}>Second tab</Link>
        <Link to='/' style={{ textDecoration: 'none' }}>Third tab</Link>
        <Link to='/' style={{ textDecoration: 'none' }}>Fourth tab</Link>
      </nav>
    </header>
  );
}
