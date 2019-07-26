import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#fff',
  },
  customMap: {
    width: '100%',
    height: '395px',
  },
  contactIcons: {
    color: '#000',
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography
              align="left"
              variant="h3"
              component="h2"
              color="secondary"
              paragraph={true}
            >
              Venha nos conhecer!
            </Typography>
            <Typography
              align="left"
              variant="body1"
              color="secondary"
              paragraph={true}
            >
              O Studio fica pertinho do Salvador Shopping, no novo centro
              comercial de Salvador, ao lado dos prédios da Receita Federal e
              Anatel, dá uma olhada no mapa para se localizar!
            </Typography>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.841488883148!2d-38.45518288473498!3d-12.981988290849008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b75f94468d5%3A0x3ca09d5d5a254921!2sLS+MakeUp+Studio!5e0!3m2!1spt-BR!2sbr!4v1564006405963!5m2!1spt-BR!2sbr"
                className={classes.customMap}
                frameBorder="0"
                title="LS MakeUp Studio"
                allowFullScreen
              />
            </div>
          </Grid>
          <Grid item lg={6}>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <Typography
                  align="left"
                  variant="h4"
                  component="h4"
                  color="secondary"
                >
                  Contato
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <List component="nav">
                  <ListItem disableGutters={true}>
                    <ListItemIcon className={classes.contactIcons}>
                      <FontAwesomeIcon size="lg" icon={faWhatsapp} />
                    </ListItemIcon>
                    <ListItemText primary="(71) 99713-6595" />
                  </ListItem>
                  <ListItem disableGutters={true}>
                    <ListItemIcon className={classes.contactIcons}>
                      <FontAwesomeIcon size="lg" icon={faInstagram} />
                    </ListItemIcon>
                    <ListItemText primary="@lsmakeup" />
                  </ListItem>
                  <ListItem disableGutters={true}>
                    <ListItemIcon className={classes.contactIcons}>
                      <FontAwesomeIcon size="lg" icon={faEnvelope} />
                    </ListItemIcon>
                    <ListItemText primary="atendimento@luannasampaio.com.br" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={12}>
                <Typography
                  align="left"
                  variant="h4"
                  component="h4"
                  color="secondary"
                  paragraph={true}
                >
                  Mensagem
                </Typography>
                <Typography
                  align="left"
                  variant="body1"
                  color="secondary"
                  paragraph={true}
                >
                  Envie seu recado diretamente para o meu WhatsApp!
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="wappMessage">Conte-me mais!</InputLabel>
                  <Input
                    id="wappMessage"
                    name="wappMessage"
                    multiline={true}
                    rows={6}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={12}>
                <Button
                  fullWidth={true}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Enviar mensagem
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
