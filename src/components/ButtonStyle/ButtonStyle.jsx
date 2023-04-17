import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export const ButtonStyle = ({
  type = 'button',
  disabled = false,
  children,
  onClick,
  ...allyProps
}) => {
  return (
    <Button
      variant="contained"
      size="medium"
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </Button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
