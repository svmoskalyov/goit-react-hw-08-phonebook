import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { register } from 'redux/auth';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'grid',
        justifyItems: 'center',
        gap: '15px',
        width: 330,
      }}
    >
      <TextField
        autoComplete="given-name"
        name="name"
        required
        fullWidth
        id="name"
        label="Name"
        size="small"
        autoFocus
      />

      <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        size="small"
      />

      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        startIcon={<AppRegistrationIcon />}
      >
        Register
      </Button>
    </Box>
  );
};
