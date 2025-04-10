// MediaBanner.js
import React from 'react';
import { Box, Container } from '@mui/material';

function MediaBanner({ mediaSrc, isVideo = false }) {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 2 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center',height:'auto' }}>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {isVideo ? (
            <video
              src={mediaSrc}
              autoPlay
              loop
              muted
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : (
            <img
              src={mediaSrc}
              alt="Banner"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MediaBanner;
