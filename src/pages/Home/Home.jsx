import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Typography
        variant="h4"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Home Page
      </Typography>
    </div>
  );
};
