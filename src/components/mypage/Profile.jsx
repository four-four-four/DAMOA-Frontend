import React from 'react';
import { StyledBtnItem, StyledFormItem, StyledBox } from './common.styled';
import {
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import { useObserver } from '../../hooks/useObserver';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Profile = ({ userDetail, handleEdit, handleSave, isEdit }) => {
  const ref = useRef();
  const [show, setShow] = useState(0);
  const [formValues, setFormValues] = useState(userDetail);
  const entry = useObserver(ref, { rootMargin: '0px' });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setShow(1);
    }
  }, [entry]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <>
      <StyledBox container ref={ref} show={show} className="mypage-box">
        <StyledFormItem item xs={12} sx={{ marginBottom: '1rem' }}>
          <Avatar sx={{ alt: '사용자 이미지', width: 60, height: 60 }} />
        </StyledFormItem>

        {Object.entries(userDetail).map(([field, data]) => {
          return (
            <React.Fragment key={field}>
              <StyledFormItem item xs={2}>
                <Typography>{field}</Typography>
              </StyledFormItem>
              <StyledFormItem item xs={10}>
                <TextField
                  id={`${field}-input`}
                  name={field}
                  disabled={isEdit === 1 ? false : true}
                  variant="outlined"
                  defaultValue={data}
                  onChange={handleFormChange}
                />
              </StyledFormItem>
            </React.Fragment>
          );
        })}
        <StyledBtnItem item xs={12} className="formBtn">
          <Button
            variant="contained"
            className="formBtn"
            onClick={() => {
              handleEdit();
            }}>
            수정
          </Button>
          {isEdit == 1 ? (
            <Button
              variant="outlined"
              className="formBtn"
              onClick={() => {
                handleSave();
              }}>
              저장
            </Button>
          ) : (
            <></>
          )}
        </StyledBtnItem>
      </StyledBox>
    </>
  );
};

export default Profile;
