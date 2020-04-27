import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import videoIntro from '../media/intro.mp4';

const useStyles = makeStyles(theme => ({
  hero: {
    background: '#000',
  },
  grid: {
    paddingTop: '140px',
    paddingBottom: theme.spacing(10),
  },
  gridSlogan: {
    padding: theme.spacing(1),
  },
  title: {
    paddingTop: '30px',
  },
  actionButton: {
    marginTop: '20px',
  },
  video: {
    width: '100%',
  },
}));

const Hero = ({ title }) => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid className={classes.gridSlogan} item lg={5}>
            <Typography
              variant="h3"
              component="h1"
              color="primary"
              className={classes.title}
            >
              Serviços de maquiagem e penteado.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="primary"
              className={classes.title}
            >
              O mais novo Studio de maquiagem em Salvador, prestando serviços
              para Noivas, Formandas e eventos sociais, além de cursos de
              aprimoramento para maquiadores e automaquiagem para iniciantes.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.actionButton}
            >
              Agende seu Horário
            </Button>
          </Grid>
          <Grid item lg={7}>
            <video
              className={classes.video}
              src={videoIntro}
              loop
              autoPlay
              muted
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
