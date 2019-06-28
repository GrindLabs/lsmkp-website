import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#000',
  },
}));

const Schedule = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container fixed>
        <Typography align="left" variant="h2" component="h2" color="primary">
          Agende!
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          component="h2"
          color="primary"
        >
          Informações sobre os demais serviços
        </Typography>
      </Container>
    </section>
  );
};

export default Schedule;
