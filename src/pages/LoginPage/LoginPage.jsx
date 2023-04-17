import { Box, Typography } from '@mui/material';
import { LoginForm } from 'components';

const LoginPage = () => {
  return (
    <Box
      p="30px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        mx: 'auto',
        borderRadius: 4,
        boxShadow: 3,
        backgroundColor: '#f6f8f9',
      }}
    >
      <Typography component="h1" variant="h5">
        Login Form
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
