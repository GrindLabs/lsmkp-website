import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '@material-ui/icons/DateRange';
import { Container, Grid, Typography } from '@material-ui/core';
import videoIntro from '../media/intro.mp4';

const useStyles = makeStyles(theme => ({
  header: {
    background: '#000',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
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

const Header = ({ title }) => {
  const classes = useStyles();
  const { logoAppBar } = useStaticQuery(
    graphql`
      query {
        logoAppBar: file(relativePath: { eq: "logo/white.png" }) {
          childImageSharp {
            fixed(height: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <header className={classes.header}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Img fixed={logoAppBar.childImageSharp.fixed} alt={title} />
          <div className={classes.toolbarButtons}>
            <Button color="primary" className={classes.button}>
              Serviços
            </Button>
            <Button color="primary" className={classes.button}>
              Studio
            </Button>
            <Button color="primary" className={classes.button}>
              Portfólio
            </Button>
            <Button color="primary" className={classes.button}>
              Noivas
            </Button>
            <Button color="primary" className={classes.button}>
              Contato
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Agende
              <DateRange className={classes.rightIcon} />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
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
              O mais novo Studio de maquiagem em Salvador, prestando serviços para Noivas, Formandas e eventos sociais, além de cursos de aprimoramento para maquiadores e automaquiagem para iniciantes.
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
    </header>
  );
};

export default Header;
