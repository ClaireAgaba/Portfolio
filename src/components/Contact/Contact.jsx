import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Link, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_qkjr19e', // You'll need to replace this with your EmailJS service ID
      'template_0g41k6c', // You'll need to replace this with your EmailJS template ID
      form.current,
      'fqV-_rZljFQYO5P55' // You'll need to replace this with your EmailJS public key
    )
      .then((result) => {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        form.current.reset();
      }, (error) => {
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      });
  };

  const contactInfo = [
    {
      icon: <GitHubIcon />,
      text: 'GitHub',
      link: 'https://github.com/ClaireAgaba',
      label: 'GitHub Profile'
    },
    {
      icon: <LinkedInIcon />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/claire-agaba-4218b4184/',
      label: 'LinkedIn Profile'
    },
    {
      icon: <EmailIcon />,
      text: 'agabaclaire70@gmail.com',
      link: 'mailto:agabaclaire70@gmail.com',
      label: 'Email'
    },
    {
      icon: <TwitterIcon />,
      text: 'Twitter',
      link: 'https://x.com/acl256',
      label: 'Twitter Profile'
    },
    {
      icon: <LocationOnIcon />,
      text: 'Kampala, Uganda',
      link: 'https://www.google.com/maps?q=kampala+uganda',
      label: 'Location'
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Contact Me
          </Typography>

          {/* Contact Information Section */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                }}
              >
                <Grid container spacing={3}>
                  {contactInfo.map((contact, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 2,
                          '&:hover': {
                            color: contact.link ? 'primary.main' : 'inherit',
                          },
                        }}
                      >
                        {contact.link ? (
                          <Link
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              textDecoration: 'none',
                              color: 'inherit',
                              '&:hover': {
                                color: '#667eea',
                              },
                            }}
                          >
                            {contact.icon}
                            <Typography>{contact.text}</Typography>
                          </Link>
                        ) : (
                          <>
                            {contact.icon}
                            <Typography>{contact.text}</Typography>
                          </>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          {/* Contact Form Section */}
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                }}
              >
                <form ref={form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="user_name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="user_email"
                        type="email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                          color: 'white',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #764ba2 30%, #667eea 90%)',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
