import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { selectIsLoggedIn } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
      }}
    >
      <Button
        component={NavLink}
        to="/"
        variant="contained"
        size="medium"
        startIcon={<HomeIcon />}
      >
        Home
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          variant="contained"
          size="medium"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
