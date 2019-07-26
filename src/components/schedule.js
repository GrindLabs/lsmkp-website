import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Typography,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControl,
  InputLabel,
  Paper,
  Input,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import brLocale from 'date-fns/locale/pt-BR';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#000',
  },
  field: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5px',
  },
}));

const Schedule = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('bride');
  const [services, setServices] = React.useState({ service: 'bride' });
  const [selectedDateTime, setDateTimeChange] = React.useState(new Date());
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleServiceChange = event => {
    setServices(oldServices => ({
      ...oldServices,
      [event.target.name]: event.target.value,
    }));
  };
  const handleDateTimeChange = date => {
    setDateTimeChange(date);
  };

  return (
    <section className={classes.section}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              align="left"
              variant="h2"
              component="h1"
              color="primary"
            >
              Agende!
            </Typography>
            <Typography
              align="left"
              variant="subtitle1"
              component="h2"
              color="primary"
            >
              Agendamento e informações sobre os demais serviços
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ExpansionPanel
                  expanded={expanded === 'bride'}
                  onChange={handleChange('bride')}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="bridePanelHeader"
                  >
                    <Typography>Noivas</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed quis ornare mi, vitae pharetra elit. Aenean auctor
                      convallis lorem, non aliquam nisl tincidunt sed. Donec
                      hendrerit sagittis vehicula. Vestibulum feugiat risus
                      pulvinar lectus vehicula, vel viverra orci luctus.
                      Suspendisse nec mattis erat. Aliquam tristique urna id
                      purus viverra, eget maximus felis commodo. Donec ut nunc
                      mauris. Maecenas posuere in tortor sed tincidunt. In nibh
                      libero, faucibus eu luctus at, tempor eu lorem.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === 'undergraduate'}
                  onChange={handleChange('undergraduate')}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="undergraduatePanelHeader"
                  >
                    <Typography>Formandas</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed quis ornare mi, vitae pharetra elit. Aenean auctor
                      convallis lorem, non aliquam nisl tincidunt sed. Donec
                      hendrerit sagittis vehicula. Vestibulum feugiat risus
                      pulvinar lectus vehicula, vel viverra orci luctus.
                      Suspendisse nec mattis erat. Aliquam tristique urna id
                      purus viverra, eget maximus felis commodo. Donec ut nunc
                      mauris. Maecenas posuere in tortor sed tincidunt. In nibh
                      libero, faucibus eu luctus at, tempor eu lorem.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === 'social'}
                  onChange={handleChange('social')}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="socialPanelHeader"
                  >
                    <Typography>Social</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed quis ornare mi, vitae pharetra elit. Aenean auctor
                      convallis lorem, non aliquam nisl tincidunt sed. Donec
                      hendrerit sagittis vehicula. Vestibulum feugiat risus
                      pulvinar lectus vehicula, vel viverra orci luctus.
                      Suspendisse nec mattis erat. Aliquam tristique urna id
                      purus viverra, eget maximus felis commodo. Donec ut nunc
                      mauris. Maecenas posuere in tortor sed tincidunt. In nibh
                      libero, faucibus eu luctus at, tempor eu lorem.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === 'classes'}
                  onChange={handleChange('classes')}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="classesPanelHeader"
                  >
                    <Typography>Cursos</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed quis ornare mi, vitae pharetra elit. Aenean auctor
                      convallis lorem, non aliquam nisl tincidunt sed. Donec
                      hendrerit sagittis vehicula. Vestibulum feugiat risus
                      pulvinar lectus vehicula, vel viverra orci luctus.
                      Suspendisse nec mattis erat. Aliquam tristique urna id
                      purus viverra, eget maximus felis commodo. Donec ut nunc
                      mauris. Maecenas posuere in tortor sed tincidunt. In nibh
                      libero, faucibus eu luctus at, tempor eu lorem.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item lg={6}>
                <Paper className={classes.container}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor="firstName">Nome</InputLabel>
                    <Input id="firstName" name="firstName" />
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item lg={6}>
                <Paper className={classes.container}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor="lastName">Sobrenome</InputLabel>
                    <Input id="lastName" name="lastName" />
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item lg={12}>
                <Paper className={classes.container}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" name="email" type="email" />
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item lg={12}>
                <Paper className={classes.container}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor="phoneNumber">Celular</InputLabel>
                    <Input id="phoneNumber" name="phoneNumber" type="tel" />
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item lg={6}>
                <Paper className={classes.container}>
                  <FormControl fullWidth={true}>
                    <InputLabel htmlFor="service">Serviço</InputLabel>
                    <Select
                      value={services.service}
                      onChange={handleServiceChange}
                      inputProps={{ name: 'service', id: 'service' }}
                    >
                      <MenuItem value="bride">Noivas</MenuItem>
                      <MenuItem value="undergraduate">Formandas</MenuItem>
                      <MenuItem value="social">Social</MenuItem>
                      <MenuItem value="classAutomake">
                        Curso de Automaquiagem
                      </MenuItem>
                      <MenuItem value="classProfessional">
                        Curso de Aperfeiçoamento
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item lg={6}>
                <Paper className={classes.container}>
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}
                    locale={brLocale}
                  >
                    <DateTimePicker
                      value={selectedDateTime}
                      onChange={handleDateTimeChange}
                      className={classes.field}
                      ampm={false}
                      minutesStep={5}
                      disablePast={true}
                      format="dd/MM/yyyy H:mm"
                      label="Data"
                    />
                  </MuiPickersUtilsProvider>
                </Paper>
              </Grid>
              <Grid item lg={12}>
                <Button
                  fullWidth={true}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Agendar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Schedule;
