import { Grid, Avatar, Button } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledBox = styled(Grid)({
  border: '1px solid black'
});

export const StyledButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
`
);

export const StyledAvatar = styled(Avatar)``;
