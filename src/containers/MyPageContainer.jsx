import React, { useState } from 'react';
import Profile from '../components/mypage/Profile';
import ManageKeyWord from '../components/mypage/ManageKeyWord';
import Scrap from '../components/mypage/Scrap';

const MyPageContainer = ({ focusComponent }) => {
  const INITIAL_USER_STATE = {
    // TODO: axios fetch user data from server
    이메일: 'damoa@gmail.com',
    비밀번호: '********',
    생년월일: '2022년',
    성별: '남자',
    직업: '취업준비생'
  };
  const KEYWORDS = ['금융', '비트코인', '주식', '부동산', '워홀', '테슬라', '애플'];
  const [userDetail, setUserDetail] = useState(INITIAL_USER_STATE);
  const [keywords, setKeywords] = useState(KEYWORDS);
  const [isEdit, setIsEdit] = useState(0);

  const handleEdit = () => {
    setIsEdit(1);
  };
  const handleSave = () => {
    setIsEdit(0);
  };

  const handleDelete = (idx) => {
    setKeywords(keywords.filter((value, index) => index != idx));
  };

  return (
    <>
      <Profile
        userDetail={userDetail}
        handleEdit={handleEdit}
        handleSave={handleSave}
        isEdit={isEdit}
      />
      <ManageKeyWord keywords={keywords} handleDelete={handleDelete} />
      <Scrap />
    </>
  );
};

export default MyPageContainer;
