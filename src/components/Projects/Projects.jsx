import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import creativeImage from '../../assets/images/creative.png';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: 'Creative Hub',
      description: 'A web application built with React and Node.js',
      image: creativeImage,
      github: 'https://github.com/ClaireAgaba/Creative-Hub',
      demo: '#'
    },
    {
      title: 'Graduate Tracking System',
      description: 'Mobile-first responsive design with modern UI/UX',
      image: 'https://via.placeholder.com/350x200',
      github: '#',
      demo: '#'
    },
    {
      title: 'Maid Match',
      description: 'Full-stack application with database integration',
      image: 'https://via.placeholder.com/350x200',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
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
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            My Projects
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={isMobile ? "160" : "200"}
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          color: '#1a237e', 
                          fontWeight: 'bold',
                          fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#424242',
                          fontSize: { xs: '0.875rem', md: '1rem' }
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: { xs: 1.5, md: 2 }, pt: 0 }}>
                      <Button 
                        size={isMobile ? "small" : "medium"}
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: '#764ba2',
                          '&:hover': { color: '#667eea' }
                        }}
                      >
                        Code
                      </Button>
                      <Button 
                        size={isMobile ? "small" : "medium"}
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: '#764ba2',
                          '&:hover': { color: '#667eea' }
                        }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
