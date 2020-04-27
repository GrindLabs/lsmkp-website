import React from 'react';
import {
  Container,
  Typography,
  CardHeader,
  Grid,
  Card,
  withStyles,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#fff',
  },
  packages: {
    marginTop: theme.spacing(6),
  },
}));

const CardPackageHeader = withStyles({
  root: { textAlign: 'center', background: '#000', color: '#fff' },
  subheader: { color: '#fff' },
})(CardHeader);

const Brides = () => {
  const classes = useStyles();

  return (
    <section id="brides" className={classes.section}>
      <Container fixed>
        <Typography
          align="center"
          variant="h4"
          component="h2"
          color="secondary"
        >
          Pacotes especiais para Noivas
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
        <Grid container spacing={2} className={classes.packages}>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="flex-end" spacing={2}>
              <Grid item xs={4}>
                <Card>
                  <CardPackageHeader title="Pacote Noiva Cartório" />
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemText primary="Maquiagem" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Penteado" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Serviços realizados no Studio" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Pacote válido apenas de segunda a sexta" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth={true} variant="outlined">
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardPackageHeader
                    title="Pacote Studio"
                    subheader="Mais procurado"
                  />
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemText primary="Maquiagem" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Penteado" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Prova de Maquiagem e Penteado" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Serviços realizados no Studio" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth={true}
                      variant="contained"
                      color="secondary"
                    >
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardPackageHeader title="Pacote Externo" />
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemText primary="Maquiagem" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Penteado" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Prova de Maquiagem e Penteado no Studio" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Serviços realizados no local do evento" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth={true} variant="outlined">
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="flex-end" spacing={2}>
              <Grid item xs={4}>
                <Card>
                  <CardPackageHeader title="Pacote Externo + Ensaio" />
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemText primary="Serviços do Pacote Externo" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Produção para ensaio Pré-Wedding" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Ensaio realizado no Studio" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth={true} variant="outlined">
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardPackageHeader title="Pacote com Acompanhamento" />
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemText primary="Serviços do Pacote Externo + Ensaio" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Acompanhamento na festa" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Troca e retoque do penteado e maquiagem" />
                      </ListItem>
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth={true} variant="outlined">
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Brides;
