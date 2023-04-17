import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut, selectUser } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Typography component="h3" variant="h7" fontStyle="italic">
        {user.name}
      </Typography>

      <Button
        type="button"
        variant="contained"
        size="medium"
        sx={{ width: 100 }}
        onClick={() => dispatch(logOut())}
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Box>
  );
};
