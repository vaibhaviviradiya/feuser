import React from 'react'
import { Button, Grid, Typography, Box } from '@mui/material';
function Imagesforhomes({ img1, img2, showHello = false ,video}) {
    return (
        <div>
            <Box sx={{ flexGrow: 1, padding: '16px' }} mt={0}>

                <Grid container spacing={2} alignItems="center">

                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                            alt="summer 2025 Collection"
                            src={img1}
                        />
                    </Grid>

                    {/* Image Section */}
                    {/* <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                            alt="summer 2025 Collection"
                            src={img2}
                        />
                    </Grid> */}
                    {showHello ? (
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            >
                                <video
                                    src={video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                    ) : (
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                                alt="summer 2025 Collection"
                                src={img2}
                            />
                        </Grid>
                    )}

                </Grid>
            </Box>


        </div >
    )
}

export default Imagesforhomes