import { Avatar, Button, Box } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledBox = styled(Box)((props) => ({
  padding: '20px',
  opacity: !props.show && 0,
  transform: props.show ? 'translateY(0)' : 'translateY(100px)',
  //transition: !props.show && '0.5s''
  transition: '0.5s'
}));

export const StyledScrapBox = styled(Box)({
  borderRadius: 4,
  padding: 12,
  minHeight: 200,
  width: 200,
  backgroundColor: 'grey'
});

export const StyledButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
`
);

export const StyledAvatar = styled(Avatar)``;

// SideBar
export const StyledSideBar = styled(Box)({
  left: 0,
  width: '262px',
  marginRight: '24px',
  '& ul': {
    listStyleType: 'none'
  }
});
