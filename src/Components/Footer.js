import React from 'react'
import { Grid, Box, Typography, TextField, Divider, Container, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const StyledFooter = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
    position: 'relative',
    borderTop: '1px solid rgba(0,0,0,0.08)',
    color: '#333',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
    }
}));

const StyledTextField = styled(TextField)({
    '& .MuiInput-underline:before': {
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#000',
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(0,0,0,0.7)',
    },
    '& .MuiInput-input': {
        color: '#000',
    }
});

const FooterTypography = styled(Typography)(({ isTitle }) => ({
    position: 'relative',
    transition: 'all 0.3s ease',
    cursor: isTitle ? 'default' : 'pointer',
    color: isTitle ? '#000' : 'rgba(0,0,0,0.7)',
    '&:hover': {
        color: '#000',
        transform: isTitle ? 'none' : 'translateX(5px)',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -4,
        left: 0,
        width: isTitle ? '30px' : '0',
        height: '2px',
        background: 'linear-gradient(90deg, #000, transparent)',
        transition: 'width 0.3s ease',
    }
}));

const SocialIconButton = styled(IconButton)({
    color: 'rgba(0,0,0,0.7)',
    transition: 'all 0.3s ease',
    margin: '0 8px',
    '&:hover': {
        color: '#000',
        transform: 'translateY(-2px)',
    },
    '&:first-of-type': {
        marginLeft: 0
    }
});

function Footer() {
    const [value, setValue] = React.useState(null);
    
    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <Box sx={{ 
                    padding: '60px 0',
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <FooterTypography
                                variant="subtitle1"
                                textTransform="uppercase"
                                fontWeight="600"
                                fontSize={14}
                                fontFamily="Gadugi"
                                isTitle
                                sx={{ mb: 3 }}
                            >
                                Newsletter
                            </FooterTypography>
                            <StyledTextField
                                sx={{ width: '100%', mb: 4 }}
                                label="Email"
                                type="email"
                                variant="standard"
                                placeholder="Enter your email"
                            />

                            <FooterTypography
                                variant="subtitle1"
                                textTransform="uppercase"
                                fontWeight="600"
                                fontSize={14}
                                fontFamily="Gadugi"
                                isTitle
                                sx={{ mb: 3 }}
                            >
                                Our Boutiques
                            </FooterTypography>

                            <FooterTypography
                                variant="body2"
                                fontWeight="500"
                                fontSize={14}
                                fontFamily="Microsoft JhengHei"
                                sx={{ mb: 2 }}
                            >
                                Christian Dior Couture Boutiques
                            </FooterTypography>
                            <FooterTypography
                                variant="body2"
                                fontWeight="500"
                                fontSize={14}
                                fontFamily="Microsoft JhengHei"
                            >
                                Parfums Christian Dior Boutiques
                            </FooterTypography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <FooterTypography
                                variant="subtitle1"
                                textTransform="uppercase"
                                fontWeight="600"
                                fontSize={14}
                                fontFamily="Gadugi"
                                isTitle
                                sx={{ mb: 3 }}
                            >
                                Client Services
                            </FooterTypography>
                            <FooterTypography
                                variant="body2"
                                textTransform="uppercase"
                                fontWeight="500"
                                fontSize={13}
                                fontFamily="Gadugi"
                                sx={{ mb: 2 }}
                            >
                                Contact
                            </FooterTypography>
                            <FooterTypography
                                variant="body2"
                                textTransform="uppercase"
                                fontWeight="500"
                                fontSize={13}
                                fontFamily="Gadugi"
                            >
                                FAQ
                            </FooterTypography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <FooterTypography
                                variant="subtitle1"
                                textTransform="uppercase"
                                fontWeight="600"
                                fontSize={14}
                                fontFamily="Gadugi"
                                isTitle
                                sx={{ mb: 3 }}
                            >
                                Legal & Privacy
                            </FooterTypography>
                            {['Legal Terms', 'Privacy Notice', 'Cookies Management', 'Follow Us', 
                              'Dior Sustainability', 'Career', 'Site Map'].map((text, index) => (
                                <FooterTypography
                                    key={text}
                                    variant="body2"
                                    fontWeight="500"
                                    fontSize={14}
                                    fontFamily="Microsoft JhengHei"
                                    sx={{ mb: index === 6 ? 0 : 2 }}
                                >
                                    {text}
                                </FooterTypography>
                            ))}
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <FooterTypography
                                variant="subtitle1"
                                textTransform="uppercase"
                                fontWeight="600"
                                fontSize={14}
                                fontFamily="Gadugi"
                                isTitle
                                sx={{ mb: 3 }}
                            >
                                Connect With Us
                            </FooterTypography>
                            
                            <Box sx={{ mb: 3 }}>
                                <SocialIconButton>
                                    <FacebookIcon />
                                </SocialIconButton>
                                <SocialIconButton>
                                    <InstagramIcon />
                                </SocialIconButton>
                                <SocialIconButton>
                                    <TwitterIcon />
                                </SocialIconButton>
                                <SocialIconButton>
                                    <YouTubeIcon />
                                </SocialIconButton>
                            </Box>

                            <FooterTypography
                                variant="body2"
                                fontWeight="500"
                                fontSize={14}
                                fontFamily="Microsoft JhengHei"
                                sx={{ mb: 2 }}
                            >
                                Stay updated with our latest collections, campaigns and exclusive offers.
                            </FooterTypography>

                            <FooterTypography
                                variant="body2"
                                fontWeight="500"
                                fontSize={14}
                                fontFamily="Microsoft JhengHei"
                            >
                                Customer Service: +91 91730 67865
                            </FooterTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </StyledFooter>
    );
}

export default Footer;