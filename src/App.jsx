import React from 'react';
// import { Link } from 'react-router-dom';
import Routes from './Routes';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function App() {
  return (
    <div>
      <nav
        style={
          {
            // borderBottom: 'solid 1px'
            // padding: '2rem'
            // paddingTop: '1rem',
            // paddingBottom: '1rem'
          }
        }>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'flex-end', margin: 'auto' }}>
              <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2 }}>
                홈 (다모아 로고)
              </Link>
              <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2 }}>
                오늘의 모아
              </Link>
              <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2 }}>
                모아분야
              </Link>
              <Link href="/Notice" color="inherit" underline="none">
                공지사항
              </Link>
            </Typography>

            <IconButton size="large" aria-label="display more actions" edge="end" color="inherit">
              {/* 로그인 전 아이콘 */}
              <Link href="/login" color="inherit">
                <LoginIcon />
              </Link>
              {/* 로그인 후 아이콘 */}
              {/* <ArrowDropDownIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* <Link to="/">Main</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/mypage">My Page</Link> */}
      </nav>
      <Routes />
    </div>
  );
}
