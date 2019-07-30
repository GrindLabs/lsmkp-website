import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCoins,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDinersClub,
} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#000',
  },
  contact: {
    color: '#fff',
  },
  customDivider: {
    backgroundColor: '#fff',
  },
  listSpacer: {
    marginTop: '12px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
  };

  return (
    <footer className={classes.section}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Typography align="left" variant="h5" color="primary">
              Vamos agendar?!
            </Typography>
            <Divider className={classes.customDivider} variant="fullWidth" />
            <Typography
              align="left"
              variant="body1"
              color="primary"
              className={classes.listSpacer}
            >
              Entre em contato comigo por um dos canais abaixo e terei o maior
              prazer em te atender!
            </Typography>
            <List dense={true} className={classes.contact}>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="(71) 99713-6595"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon icon={faInstagram} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="@lsmakeup"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="atendimento@luannasampaio.com.br"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography align="left" variant="h5" color="primary">
              Seções
            </Typography>
            <Divider className={classes.customDivider} variant="fullWidth" />
            <List dense={true} className={classes.contact}>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Serviços"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Studio"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Portfólio"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Noivas"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Agende"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Contato"
                />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography align="left" variant="h5" color="primary">
              Informações
            </Typography>
            <Divider className={classes.customDivider} variant="fullWidth" />
            <List dense={true} className={classes.contact}>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Aplicativo de Agendamento"
                />
              </ListItemLink>
              <ListItemLink href="#" disableGutters={true}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body1' }}
                  primary="Perguntas mais Frequentes"
                />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography align="left" variant="h5" color="primary">
              Formas de Pagamento
            </Typography>
            <Divider className={classes.customDivider} variant="fullWidth" />
            <List dense={true} className={classes.contact}>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCcVisa}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="Visa"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCcMastercard}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="MasterCard"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCcAmex}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="American Express"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCcDinersClub}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="Diners Club"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCreditCard}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="Cartões de Débito"
                />
              </ListItem>
              <ListItem disableGutters={true}>
                <ListItemIcon className={classes.contact}>
                  <FontAwesomeIcon
                    className={classes.contact}
                    size="lg"
                    icon={faCoins}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary="Dinheiro"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
