import { Avatar, Button, Box, Grid, TextField } from '@mui/material';
import { styled, withStyles } from '@mui/styles';

// Profile Component
export const StyledBox = styled(Grid)((props) => ({
  display: 'flex',
  padding: '5px',
  opacity: props.show == 0 ? 0 : 1,
  transform: props.show == 1 ? 'translateY(0)' : 'translateY(100px)',
  transition: '0.5s'
}));

export const StyledFormItem = styled(Grid)((props) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0.2rem'
}));

export const StyledScrapBox = styled(Box)({
  borderRadius: 4,
  padding: 12,
  minHeight: 200,
  width: 200,
  backgroundColor: 'grey'
});

export const StyledBtnItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'right',
  '& .formBtn': {
    marginRight: '0.3rem'
  }
});

// SideBar
export const StyledSideBar = styled(Box)({
  left: 0,
  width: '262px',
  marginRight: '24px',
  '& ul': {
    listStyleType: 'none'
  }
});
