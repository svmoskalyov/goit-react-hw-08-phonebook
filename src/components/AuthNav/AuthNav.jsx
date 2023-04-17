import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        size="medium"
        startIcon={<AppRegistrationIcon />}
      >
        Register
      </Button>

      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        size="medium"
        startIcon={<LoginIcon />}
      >
        Log In
      </Button>
    </Box>
  );
};
