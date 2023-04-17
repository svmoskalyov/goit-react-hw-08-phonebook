import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { logIn } from 'redux/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
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
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        size="small"
        autoFocus
      />

      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        size="small"
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        startIcon={<LoginIcon />}
      >
        Log In
      </Button>
    </Box>
  );
};
