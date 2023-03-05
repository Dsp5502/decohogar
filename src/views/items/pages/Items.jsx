import { Box, Grid } from '@mui/material';
import React from 'react';
import { SideBar } from '../../components/sidebar/Sidebar';

export const Items = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        width: '100%',
        // border: '1px solid red',
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={12}>
          <h1>Items</h1>
        </Grid>
      </Grid>
    </Box>
  );
};
