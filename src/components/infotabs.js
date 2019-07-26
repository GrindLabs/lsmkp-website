import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: '140px',
    paddingBottom: theme.spacing(10),
    background: '#fff',
  },
}));

const InfoTabs = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container fixed>
        <Typography
          align="center"
          variant="h4"
          component="h2"
          color="secondary"
        >
          Informações
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          component="h2"
          color="secondary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          tortor eget diam euismod eleifend. Pellentesque sollicitudin non lorem
          at.
        </Typography>
      </Container>
    </section>
  );
};

export default InfoTabs;
