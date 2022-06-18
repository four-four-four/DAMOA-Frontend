import React from 'react';
import { StyledBox } from './common.styled';

const ManageKeyWord = (props) => {
  return (
    <StyledBox show={props.show} className="mypage-box">
      Manage Keyword
    </StyledBox>
  );
};

export default ManageKeyWord;
