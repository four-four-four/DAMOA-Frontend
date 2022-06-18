import React from 'react';
import { StyledBox, StyledAvatar, StyledButton } from './common.styled';
import { Input, Typography, TextField } from '@mui/material';
import { useObserver } from '../../hooks/useObserver';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Profile = (props) => {
  const ref = useRef();
  const [show, setShow] = useState();
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(true);
    }
  }, [entry]);

  return (
    <>
      <StyledBox ref={ref} show={show} className="mypage-box">
        <StyledAvatar />
        <Typography>이메일</Typography>
        <TextField disabled variant="outlined" defaultValue="damoa@gmail.com" />
        <Typography>비밀번호</Typography>
        <TextField disabled variant="outlined" defaultValue="********" />
        <Typography>출생년도</Typography>
        <TextField disabled variant="outlined" defaultValue="2022년" />
        <Typography>성별</Typography>
        <TextField disabled variant="outlined" defaultValue="남자" />
        <Typography>직업</Typography>
        <TextField disabled variant="outlined" defaultValue="취업준비생" />
        <StyledButton variant="contained">수정</StyledButton>
      </StyledBox>
    </>
  );
};

export default Profile;
