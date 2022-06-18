import React from 'react';
import MyPageSideBar from '../../components/mypage/MyPageSideBar';
import Profile from '../../components/mypage/Profile';
import { Grid } from '@mui/material';
import { StyledLayout } from './MyPage.styled';

const MyPage = () => {
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
