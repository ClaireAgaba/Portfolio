import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 90 },
  ];

  return (
    <Box
      id="skills"
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
            Skills
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{ p: 3 }}
                  component={motion.div}
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography variant="h6" gutterBottom>
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        backgroundColor: '#2196f3',
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, textAlign: 'right' }}
                  >
                    {skill.level}%
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
