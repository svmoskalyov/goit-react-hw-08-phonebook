import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth';

export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectToken);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
