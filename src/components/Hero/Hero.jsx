import React from 'react';
import { Box, Typography, Container, Button, Grid, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: { xs: 4, md: 0 }, // Add padding on mobile
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, md: 8 }} 
          alignItems="center"
          direction={isMobile ? 'column-reverse' : 'row'} // Stack image above text on mobile
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Hi, I'm Claire Agaba
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                    color: 'text.secondary',
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.3,
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    width: '100%'
                  }}
                >
                  <Button
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    href="#contact"
                    startIcon={<EmailIcon />}
                    fullWidth={isMobile}
                    sx={{
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      color: 'white',
                      px: { xs: 2, md: 4 },
                      py: { xs: 1, md: 1.5 },
                      '&:hover': {
                        background: 'linear-gradient(45deg, #764ba2 30%, #667eea 90%)',
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outlined"
                    size={isMobile ? "medium" : "large"}
                    href="/src/assets/resume/Agaba_Resume.pdf"
                    target="_blank"
                    startIcon={<DownloadIcon />}
                    fullWidth={isMobile}
                    sx={{
                      borderColor: '#667eea',
                      color: '#667eea',
                      px: { xs: 2, md: 4 },
                      py: { xs: 1, md: 1.5 },
                      '&:hover': {
                        borderColor: '#764ba2',
                        color: '#764ba2',
                        backgroundColor: 'rgba(102, 126, 234, 0.04)',
                      },
                    }}
                  >
                    View Resume
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/src/assets/images/pic.jpeg"
                alt="Claire Agaba"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '280px', sm: '320px', md: '400px' },
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
