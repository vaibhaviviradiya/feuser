import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardCover';


export default function Textforhomes({ title, text, showButton = true, showimg = true }) { 

    return (
        <>
            <Box
                component="ul"
                sx={{ display: 'flex', flexWrap: 'wrap', p: 0, borderRadius: 0 }}
            >

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
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '6px', marginBottom: '8px', fontSize: '20px' }}>

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

                            {showButton && (
                                <Button
                                    sx={{
                                        p: 0, pt: 1, mb: 3, color: 'text.primary',
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
                            )}
                        </center>
                    </Typography>
                </Box>
            </Grid>
            {showimg && (<Card
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    backgroundImage: `url("https://diorama.dam-broadcast.com/cdn-cgi/image/width=3000,format=auto/pm_11872_1022_1022082-4es5tb8npm-whr.jpg")`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    display: 'flex',
                    backgroundAttachment: 'fixed',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                        zIndex: 1,
                    }}
                />

                <CardContent
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontWeight: 'bold',
                            mb: 1,
                        }}
                    >
                        Lifestyle Capsule
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontFamily: 'Century Gothic',
                        }}
                    >
                        The House unveils the Lifestyle Capsule from the Dior Autumn Lorem<br></br><b>Fall 2025</b>
                    </Typography>
                </CardContent>
            </Card>)}
        </>
    );
}
