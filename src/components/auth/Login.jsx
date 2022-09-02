import { Typography } from '@mui/material';
import React from 'react';
import { StyledLoginForm, FormWrapper } from './loginCommon.styled';
import { useForm } from 'react-hook-form';

const LogIn = () => {
  // Messages
  const required = '필수 입력사항입니다';
  const invalidEmail = '올바른 이메일 주소를 입력해주세요';
  const pwdMinLength = '비밀번호는 최소 8자리이어야 합니다';
  // Error Component
  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

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
            <small className="text-danger">
              {errors?.email && errors.email.type == 'required' && errorMessage(required)}
              {errors?.email && errors.email.type != 'required' && errorMessage(invalidEmail)}
            </small>
            <input
              name="email"
              className="login-textInput"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address'
                }
              })}
              placeholder="이메일"
            />
          </div>
          <div item xs={12}>
            <small className="text-danger">
              {errors?.password && errors.password.type == 'required' && errorMessage(required)}
              {errors?.password &&
                errors.password.type == 'maxLength' &&
                errorMessage(pwdMinLength)}
            </small>
            <input
              name="password"
              {...register('password')}
              className="login-textInput"
              type="password"
              {...register('password', {
                required: true,
                minLength: 8
              })}
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
