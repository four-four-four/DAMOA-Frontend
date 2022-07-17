import React, { useRef, useState, useEffect } from 'react';
import { StyledBox, StyledKeyWordItem, StyledBoard } from './common.styled';
import { useObserver } from '../../hooks/useObserver';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';

const ManageKeyWord = ({ keywords, handleDelete }) => {
  const ref = useRef();
  const [show, setShow] = useState(0);
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(1);
    }
  }, [entry]);

  return (
    <div id="manage-keyword-wrapper">
      <StyledBoard ref={ref} show={show}>
        {keywords?.map((item, idx) => (
          <React.Fragment key={`keyword-${idx}`}>
            <StyledKeyWordItem>
              <Grid item xs={6} className="keyword-text">
                {item}
              </Grid>
              <Grid item xs={2} className="keyword-icon">
                <CloseIcon
                  onClick={() => {
                    handleDelete(idx);
                  }}
                />
              </Grid>
            </StyledKeyWordItem>
          </React.Fragment>
        ))}
      </StyledBoard>
    </div>
  );
};

export default ManageKeyWord;
