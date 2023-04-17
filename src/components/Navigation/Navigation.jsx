import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { selectIsLoggedIn } from 'redux/auth';
import { ButtonStyle } from 'components';

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
      <ButtonStyle component={NavLink} to="/" startIcon={<HomeIcon />}>
        Home
      </ButtonStyle>

      {isLoggedIn && (
        <ButtonStyle
          component={NavLink}
          to="/contacts"
          startIcon={<GroupIcon />}
        >
          Contacts
        </ButtonStyle>
      )}
    </Box>
  );
};
