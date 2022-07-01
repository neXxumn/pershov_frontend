import React from 'react';

import Button from '@mui/material/Button';

const AuthButton = (props) => {
  return (
    <div>
      <Button variant="outlined">{props.name}</Button>
    </div>
  )
};

export default AuthButton;