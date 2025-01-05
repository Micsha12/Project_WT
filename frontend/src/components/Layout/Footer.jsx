import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2">© 2025 My Application</Typography>
    </Box>
  );
};

export default Footer;