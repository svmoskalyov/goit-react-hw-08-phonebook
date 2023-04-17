import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { ButtonStyle } from 'components';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <ButtonStyle
        component={NavLink}
        to="/register"
        startIcon={<AppRegistrationIcon />}
      >
        Register
      </ButtonStyle>

      <ButtonStyle component={NavLink} to="/login" startIcon={<LoginIcon />}>
        Log In
      </ButtonStyle>
    </Box>
  );
};
