import React from 'react';
import AuthButton from './AuthButton/AuthButton';

const AuthGroup = (props) => {
  return (
    <div>
      <AuthButton name={'Sign In'} />
      <AuthButton name={'Sign Up'} />
    </div>
  )
};

export default AuthGroup;