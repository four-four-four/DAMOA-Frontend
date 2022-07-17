import React from 'react';
import MyPageSideBar from '../../components/mypage/MyPageSideBar';
import MyPageContainer from '../../containers/MyPageContainer';
import { Grid } from '@mui/material';
import { StyledLayout } from './mypage.styled';
import { useState } from 'react';

const MyPage = () => {
  const sidebarItems = [
    { id: 'profile', label: '회원정보', icon: 'inbox' },
    { id: 'manage-keyword', label: '키워드 관리', icon: 'account_circle' },
    { id: 'scrap', label: '스크랩', icon: 'bookmark' }
  ];

  const [focusComponent, setFocusComponent] = useState('');

  const handleFocus = (clickedItem) => {
    setFocusComponent(clickedItem);
  };

  return (
    <>
      <StyledLayout container wrap="nowrap">
        <Grid item>
          <MyPageSideBar handleFocus={handleFocus} sidebarItems={sidebarItems} />
        </Grid>
        <Grid
          id="scroller"
          item
          sx={{
            position: 'relative',
            overflowY: 'auto',
            marginLeft: '150px',
            maxHeight: '500px'
          }}
          flex="6">
          <MyPageContainer focusComponent={focusComponent} />
        </Grid>
      </StyledLayout>
    </>
  );
};

export default MyPage;
