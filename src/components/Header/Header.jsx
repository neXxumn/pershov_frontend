import React, { memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AuthBar from './AuthBar/AuthBar';

import './Header.css';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="mui-relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mars News
          </Typography>
          <AuthBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
