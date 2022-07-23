import React, { useEffect, useRef, useState } from 'react';
import { StyledBox } from './common.styled';
import { useObserver } from '../../hooks/useObserver';

const Scrap = () => {
  const ref = useRef();
  const [show, setShow] = useState(0);
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(1);
    }
  }, [entry]);

  return (
    <div id="scrap-wrapper">
      <StyledBox show={show} className="mypage-box">
        Scrap, 모아 컴포넌트 재사용 예정
      </StyledBox>
    </div>
  );
};

export default Scrap;
