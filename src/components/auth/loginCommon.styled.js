import { Grid, Card } from '@mui/material';
import styled from 'styled-components/';

export const FormWrapper = styled(Card)((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const StyledLoginForm = styled(Grid)((props) => ({
  display: 'flex',
  justifyContent: 'center',

  '& .login-textInput': {
    width: '25rem',
    height: '2rem',
    display: 'inline-block',
    marginBottom: '1rem',
    border: '1px solid silver',
    borderRadius: '10px',
    padding: '0.25rem'
  },

  '& .anchor': {
    textDecoration: 'none'
  },

  '& .form-button': {
    marginBottom: '0.4rem',
    width: '25.5rem',
    height: '2rem',
    alignItems: 'center',
    border: 0,
    borderRadius: '100px',
    boxSizing: 'border-box',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'inline-flex',
    backgroundColor: '#B76E79',
    fontFamily:
      '-apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    justifyContent: 'center',
    lineHeight: '20px',
    maxWidth: '480px',
    minHeight: '40px',
    minWidth: '0px',
    overflow: 'hidden',
    padding: '0px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'center',
    touchAction: 'manipulation',
    transition:
      'background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
    userSelect: 'none',
    verticalAlign: 'middle',

    '&:hover': {
      backgroundColor: '#a4636c',
      color: '#ffffff'
    },
    '& focus': {
      backgroundColor: '#a4636c',
      color: '#ffffff'
    }
  }
}));

export const TestWrapper = styled(Card)((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

// <!-- HTML !-->
// <button class="button-18" role="button">Button 18</button>

// /* CSS */
// .button-18 {

// }

// .button-18:hover,
// .button-18:focus {
//   background-color: #16437E,
//   color: #ffffff,
// }

// .button-18:active {
//   background: #09223b,
//   color: rgb(255, 255, 255, .7),
// }

// .button-18:disabled {
//   cursor: not-allowed,
//   background: rgba(0, 0, 0, .08),
//   color: rgba(0, 0, 0, .3),
// }
