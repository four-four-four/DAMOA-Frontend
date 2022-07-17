import React, { useState } from 'react';
import Profile from '../components/mypage/Profile';

const MyPageContainer = () => {
  const INITIAL_USER_STATE = {
    // TODO: axios fetch user data from server
    이메일: 'damoa@gmail.com',
    비밀번호: '********',
    생년월일: '2022년',
    성별: '남자',
    직업: '취업준비생'
  };

  const [userDetail, setUserDetail] = useState(INITIAL_USER_STATE);
  const [isEdit, setIsEdit] = useState(0);

  const handleEdit = () => {
    setIsEdit(1);
  };
  const handleSave = () => {
    setIsEdit(0);
  };
  return (
    <>
      <Profile
        userDetail={userDetail}
        handleEdit={handleEdit}
        handleSave={handleSave}
        isEdit={isEdit}
      />
    </>
  );
};

export default MyPageContainer;
