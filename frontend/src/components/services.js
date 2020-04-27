import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from '@material-ui/core';
import imgBride from '../images/services/bride.png';
import imgCourse from '../images/services/course.png';
import imgGraduate from '../images/services/graduate.png';
import imgSocial from '../images/services/social.png';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#000',
  },
  services: {
    paddingTop: theme.spacing(5),
  },
  icon: {
    margin: theme.spacing(2),
  },
  cardHeader: {
    alignContent: 'center',
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <section id="services" className={classes.section}>
      <Container fixed>
        <Typography align="center" variant="h4" component="h2" color="primary">
          Conheça todos os serviços oferecidos
        </Typography>
        <Grid
          spacing={2}
          className={classes.services}
          container
          direction="row"
        >
          <Grid item lg={3}>
            <Card>
              <CardMedia
                image={imgBride}
                component="img"
                height="380"
                alt="Noivas"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Noivas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra tortor eget diam euismod eleifend. Pellentesque
                  sollicitudin non lorem at.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card>
              <CardMedia
                image={imgGraduate}
                component="img"
                height="380"
                alt="Formandas"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Formandas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra tortor eget diam euismod eleifend. Pellentesque
                  sollicitudin non lorem at.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card>
              <CardMedia
                image={imgSocial}
                component="img"
                height="380"
                alt="Social"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Social
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra tortor eget diam euismod eleifend. Pellentesque
                  sollicitudin non lorem at.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card>
              <CardMedia
                image={imgCourse}
                component="img"
                height="380"
                alt="Cursos"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cursos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra tortor eget diam euismod eleifend. Pellentesque
                  sollicitudin non lorem at.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Saiba mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
