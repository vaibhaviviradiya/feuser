import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardCover';
import { styled } from '@mui/material/styles';

export default function Homepage({ videoSrc ,title, text}) { // Accept the videoSrc prop

  return (
    <>
      <Box
        component="ul"
        sx={{ display: 'flex', flexWrap: 'wrap', p: 0, borderRadius: 0 }}
      >
        <Card component="li" sx={{ minWidth: 100, minHeight: 350, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster={videoSrc} // Optional: Use the videoSrc as the poster as well
            >
              <source
                src={videoSrc} // Use the videoSrc prop here
                type="video/mp4"
              />
            </video>
          </CardCover>
        </Card>
      </Box>
      <Grid>
        <Box sx={{ textAlign: 'center', p: { xs: 2, sm: 3, md: 0 } }}>
          <Typography
            color="text.primary"
            fontWeight={100}
            fontFamily={"Century Gothic"}
            fontSize={'13px'}
          >
            <center>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontFamily:'Century Gothic',
                  fontWeight: 'bold',
                  mt: { xs: 2, sm: 3, md: 0 },
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  fontFamily: 'Century Gothic',
                  pr: { xs: 2, sm: 8, md: 24, lg: 48 },
                  pl: { xs: 2, sm: 8, md: 24, lg: 48 },
                  mb: 2,
                }}
              >
                {text}
              </Typography>
              <Button
                sx={{
                  p: 0, pt: 1,mb:3, color: 'text.primary',
                  textTransform: 'none',
                  borderBottom: '2px solid black',
                  borderRadius: '0px',
                  '&:hover': {
                    borderBottom: '2px solid pink',
                  },
                }}
              >
                Discover
              </Button>
            </center>
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
