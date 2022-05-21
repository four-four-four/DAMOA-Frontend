import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

export default function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          padding: '2rem'
        }}>
        <Link to="/">Main</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/mypage">My Page</Link>
      </nav>
      <Routes />
    </div>
  );
}
