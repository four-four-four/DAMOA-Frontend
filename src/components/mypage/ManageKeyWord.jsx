import React, { useRef, useState, useEffect } from 'react';
import { StyledBox } from './common.styled';
import { useObserver } from '../../hooks/useObserver';

const ManageKeyWord = (props) => {
  const ref = useRef();
  const [show, setShow] = useState(0);
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(1);
    }
  }, [entry]);

  return (
    <StyledBox ref={ref} show={show} className="mypage-box">
      <ul>
        <li>금융</li>
        <li>비트코인</li>
        <li>주식</li>
      </ul>
    </StyledBox>
  );
};

export default ManageKeyWord;
