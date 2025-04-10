import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Grid, Box, Typography, TextField, Divider } from '@mui/material'
const options = ['Option 1', 'Option 2'];

function Footer() {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Box sx={{ padding: '30px', mt: '50px', px: '50px' }}>
                <Divider />
                <Grid container spacing={4} sx={{ pt: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="600"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            Newsletter
                        </Typography>
                        <TextField
                            sx={{ mt: 1, width: '100%' }}
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            variant="standard"
                        />

                        {/* Adding a margin specifically between the TextField and the next Typography */}
                        <Box sx={{ mt: 3 }} />

                        <Typography
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="600"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            Our Boutiques
                        </Typography>

                        <Typography
                            sx={{ mt: 4 }} // Adds margin between the two Typography elements
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"
                        >
                            Christian Dior Couture Boutiques
                        </Typography>
                        <Typography
                            sx={{ mt: 3 }} // Adds margin between the two Typography elements
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Parfums Christian Dior Boutiques
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="600"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            Client & Services
                        </Typography>
                        <Typography
                            sx={{ mt: 4 }} // Adds margin between the two Typography elements
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="500"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            contact
                        </Typography>
                        <Typography
                            sx={{ mt: 3 }} // Adds margin between the two Typography elements
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="500"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            FAQ
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="600"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            Client & Services
                        </Typography>
                        <Typography
                            sx={{ mt: 3 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Legal Terms
                        </Typography> 
                        <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Privacy Notice
                        </Typography> 
                        <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Cookies Managment
                        </Typography> 
                        <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Follow US
                        </Typography>  <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Dior Sustainability
                        </Typography> 
                        <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                            Career
                        </Typography>  <Typography
                            sx={{ mt: 2 }} 
                            variant="subtitle1"
                            // textTransform="uppercase"
                            fontWeight="500"
                            fontSize={14}
                            fontFamily="Microsoft JhengHei"

                        >
                           Site Map
                        </Typography> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            textTransform="uppercase"
                            fontWeight="600"
                            fontSize={13}
                            fontFamily="Gadugi"
                        >
                            Client & Services
                        </Typography>
                        <Stack spacing={1} sx={{ width: 300 }}>

                            <Autocomplete
                                {...defaultProps}
                                id="disable-close-on-select"
                                disableCloseOnSelect
                                sx={{
                                    variant: "subtitle1",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    // fontSize:{5},
                                    fontFamily: "Gadugi"
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Contact" variant="standard" />
                                )}
                            />
                        </Stack>
                        
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
const top100Films = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' }
];

export default Footer