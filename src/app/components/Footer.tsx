"use client"
import React, { FC } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;