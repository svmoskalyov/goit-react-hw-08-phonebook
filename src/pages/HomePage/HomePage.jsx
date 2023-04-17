import { Box, Typography } from '@mui/material';
import img from 'images/phonebook.jpeg';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '50px',
      }}
    >
      <Typography component="h1" variant="h2" fontStyle="italic" sx={{ p: 4 }}>
        Welcome to phonebook
      </Typography>

      <Box
        sx={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 500,
          width: 700,
          borderRadius: 2,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      ></Box>
    </Box>
  );
};

export default HomePage;
