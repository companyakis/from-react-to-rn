import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar sx={{backgroundColor: 'darkred'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{fontSize: 30, fontFamily: 'revert'}}>
            Today and Future Areas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
