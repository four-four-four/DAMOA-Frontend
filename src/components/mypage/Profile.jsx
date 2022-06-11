import React from 'react';
import { StyledBox, StyledAvatar, StyledButton } from './common.styled';
import { Input, Typography, TextField } from '@mui/material';

const Profile = () => {
  return (
    <>
      <StyledBox sx={{ width: '200px', border: '1rem' }}>
        <StyledAvatar />
        <Typography>닉네임</Typography>
        <TextField disabled variant="outlined" defaultValue="다모아" />
        <Typography>이메일</Typography>
        <TextField disabled variant="outlined" defaultValue="damoa@gmail.com" />
        <StyledButton variant="contained">수정</StyledButton>
      </StyledBox>
    </>
  );
};

export default Profile;
