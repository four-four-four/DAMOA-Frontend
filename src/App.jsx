import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Damoa</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          padding: '2rem'
        }}>
        <Link to="/">Main</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/my_page">My Page</Link>
      </nav>
    </div>
  );
}
