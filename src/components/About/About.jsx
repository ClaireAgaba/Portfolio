import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: '#fff',
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
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Who I Am
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. 
                  With experience in both front-end and back-end development, I enjoy bringing ideas to life through code.
                </Typography>
                <Typography variant="body1">
                  My journey in software development started with a curiosity about how things work, 
                  and has evolved into a professional career where I continuously learn and grow.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  What I Do
                </Typography>
                <Typography variant="body1" paragraph>
                  • Front-end Development: React, JavaScript, HTML/CSS
                </Typography>
                <Typography variant="body1" paragraph>
                  • Back-end Development: Node.js, Python, Databases
                </Typography>
                <Typography variant="body1" paragraph>
                  • UI/UX Design: Creating intuitive and responsive interfaces
                </Typography>
                <Typography variant="body1">
                  • Problem Solving: Analyzing complex issues and finding efficient solutions
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
