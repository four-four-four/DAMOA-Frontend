import React from 'react';
import { StyledBox } from './common.styled';
import { useObserver } from '../../hooks/useObserver';

const Scrap = () => {
  const [show, setShow] = useState(0);
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(1);
    }
  }, [entry]);

  return (
    <StyledBox show={show} className="mypage-box">
      Scrap
    </StyledBox>
  );
};

export default Scrap;
