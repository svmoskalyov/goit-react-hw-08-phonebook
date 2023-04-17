import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { AppBar } from 'components';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'grid',

        gridTemplateRows: '65px 1fr',
        gap: '30px',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
