import React from 'react';
import { StyledSideBar } from './common.styled';
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const handleScroll = () => {
  consonle.log(scrolling);
};

const MyPageSideBar = () => {
  return (
    <StyledSideBar onScroll={handleScroll}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon sx={{ margin: '0' }} />
            </ListItemIcon>
            <ListItemText primary="회원정보" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="키워드 관리" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="스크랩" />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledSideBar>
  );
};

export default MyPageSideBar;
