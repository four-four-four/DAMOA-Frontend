import { Typography, TextField, Card } from '@mui/material';
import React from 'react';
import { StyledLoginForm, FormWrapper } from './loginCommon.styled';
import { useForm } from 'react-hook-form';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters'
      }
    }
  };
  return (
    <FormWrapper>
      <form>
        <StyledLoginForm
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          minHeight="500px"
          minWidth="500px">
          <div item xs={12}>
            <Typography style={{ padding: '1rem' }}>로그인</Typography>
          </div>
          <div item xs={12}>
            <input
              name="email"
              {...register('email', registerOptions.email)}
              className="login-textInput"
              type="email"
              placeholder="이메일"
            />
            <small className="text-danger">{errors?.name && errors.name.message}</small>
          </div>
          <div item xs={12}>
            <input
              name="password"
              {...register('password')}
              className="login-textInput"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div item xs={12}>
            <button
              onClick={handleSubmit(handleRegistration, handleError)}
              className="form-button login"
              type="button"
              value="로그인">
              로그인
            </button>
          </div>
          <div item xs={12}>
            <a className="anchor" href="/signup">
              <button className="form-button signup" type="button" value="회원가입">
                회원가입
              </button>
            </a>
          </div>
        </StyledLoginForm>
      </form>
    </FormWrapper>
  );
};

export default LogIn;

// reference: https://stackoverflow.com/questions/53854030/set-textfield-height-material-ui
