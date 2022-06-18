import React, { useState, useEffect, useRef } from 'react';
import MyPageSideBar from '../../components/mypage/myPageSideBar';
import Profile from '../../components/mypage/Profile';
import ManageKeyWord from '../../components/mypage/ManageKeyWord';
import Scrap from '../../components/mypage/Scrap';
import { StyledLayout } from './MyPage.styled';
import { Grid } from '@mui/material';

const MyPage = () => {
  const myRef = useRef();
  const [show, setShow] = useState();

  // useEffect(() => {
  //   // const profile = document.querySelectorAll('.mypage-box');
  //   const observer = new IntersectionObserver(([entries]) => {
  //     console.log('entry', entries);
  //     //setShow(entry.isIntersecting);
  //   });

  //   observer.observe(myRef.current);

  //   // profile.forEach((p) => {
  //   //   observer.observe(profile[0]);
  //   // });
  // }, []);
  return (
    <>
      <StyledLayout container wrap="nowrap">
        <Grid item>
          <MyPageSideBar />
        </Grid>
        <Grid
          item
          sx={{
            maxHeight: '500px',
            overflowY: 'scroll',
            marginLeft: '250px'
          }}
          flex="3">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </Grid>
      </StyledLayout>
    </>
  );
};

export default MyPage;
