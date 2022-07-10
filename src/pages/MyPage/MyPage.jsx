import React from 'react';
import MyPageSideBar from '../../components/mypage/MyPageSideBar';
import Profile from '../../components/mypage/Profile';
import MyPageContainer from '../../containers/MyPageContainer';
import Scrap from '../../components/mypage/Scrap';
import ManageKeyWord from '../../components/mypage/ManageKeyWord';
import { Grid } from '@mui/material';
import { StyledLayout } from './mypage.styled';

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
            overflowY: 'scroll',
            marginLeft: '250px'
          }}
          flex="6">
          <MyPageContainer />

          <ManageKeyWord />
        </Grid>
      </StyledLayout>
    </>
  );
};

export default MyPage;
