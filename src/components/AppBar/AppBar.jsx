import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import { AuthNav, Navigation, UserMenu } from 'components';
import { selectIsLoggedIn } from 'redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 4,
        borderRadius: 2,
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};
