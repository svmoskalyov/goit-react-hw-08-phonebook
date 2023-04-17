import { Box, Typography } from '@mui/material';
import { RegisterForm } from 'components';

const RegisterPage = () => {
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
        Registration Form
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
