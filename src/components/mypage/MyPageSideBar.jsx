import React from 'react';
import { StyledSideBar } from './common.styled';
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import Icon from '@mui/material/Icon';

const MyPageSideBar = ({ sidebarItems, handleFocus }) => {
  const handleSidebarItem = (id) => {
    handleFocus(id);
    let scrollElement = document.getElementById(`${id}-wrapper`);

    scrollElement.scrollIntoView({ behavior: 'smooth' });
    sidebarItems.forEach((item, idx) => {
      if (item.id == id) {
        document.getElementById(`sidebar-label-${item.id}`).classList.add('selected-label');
      } else {
        document.getElementById(`sidebar-label-${item.id}`).classList.remove('selected-label');
      }
    });
  };
  return (
    <StyledSideBar>
      <List>
        {sidebarItems.map((item, idx) => (
          <ListItem key={item.id}>
            <ListItemButton
              onClick={() => {
                handleSidebarItem(item.id);
              }}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <div id={`sidebar-label-${item.id}`}>{item.label}</div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledSideBar>
  );
};

export default MyPageSideBar;
