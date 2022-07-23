import { Avatar, Button, Box, Grid, TextField } from '@mui/material';
import { styled, withStyles } from '@mui/styles';

// SideBar
export const StyledSideBar = styled(Box)((props) => ({
  left: 0,
  width: '262px',
  marginRight: '24px',
  '& ul': {
    listStyleType: 'none'
  },
  '& .selected-label': {
    fontWeight: 'bold'
  }
}));

// Profile Component
export const StyledBox = styled(Grid)((props) => ({
  display: 'flex',
  padding: '5px',
  marginBottom: '5rem',
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

// Manage Keyword Component
export const StyledKeyWordItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  borderRadius: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  padding: '0.5rem',
  margin: '0.5rem 2px',
  maxWidth: '150px'
});

export const StyledBoard = styled(Box)((props) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'auto',
  opacity: props.show == 0 ? 0 : 1,
  transform: props.show == 1 ? 'translateY(0)' : 'translateY(100px)',
  transition: '0.5s',

  '& .keyword-text': {
    marginRight: '0.5rem'
  },
  '& .keyword-icon': {
    color: '#AB2229',
    float: 'right',

    '&:hover': {
      cursor: 'pointer'
    }
  }
}));
