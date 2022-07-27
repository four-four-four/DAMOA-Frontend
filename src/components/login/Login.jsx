import { Typography, TextField, Grid } from '@mui/material';
import React from 'react';
import { StyledLoginForm } from './loginCommon.styled';

const LogIn = () => {
  return (
    <StyledLoginForm container>
      <Grid item xs={12}>
        <Typography>로그인</Typography>
      </Grid>
      <Grid item xs={12}>
        <input className="login-textInput" type="text" placeholder="이메일" />
      </Grid>
      <Grid item xs={12}>
        <input className="login-textInput" type="text" placeholder="비밀번호" />
      </Grid>
      <Grid item xs={12}>
        <input className="login-button" type="button" value="로그인" />
      </Grid>
    </StyledLoginForm>
  );
};

export default LogIn;

// reference: https://stackoverflow.com/questions/53854030/set-textfield-height-material-ui
