import React from 'react';
import {
  Container,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: '140px',
    paddingBottom: theme.spacing(10),
    background: '#fff',
  },
}));

const InfoTabs = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('bride');
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          paragraph={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          tortor eget diam euismod eleifend. Pellentesque sollicitudin non lorem
          at.
        </Typography>
        <div>
          <ExpansionPanel
            expanded={expanded === 'faq01'}
            onChange={handleChange('faq01')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq01">
              <Typography>Agendamento</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq02'}
            onChange={handleChange('faq02')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq02">
              <Typography>Formas de Pagamento</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq03'}
            onChange={handleChange('faq03')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq03">
              <Typography>Serviços para o Cabelo</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq04'}
            onChange={handleChange('faq04')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq04">
              <Typography>Cuidados com o Cabelo</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq05'}
            onChange={handleChange('faq05')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq05">
              <Typography>Contrato para Noivas</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq06'}
            onChange={handleChange('faq06')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq06">
              <Typography>Horários de Atendimento</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq07'}
            onChange={handleChange('faq07')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq07">
              <Typography>Formas de Atendimento</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'faq08'}
            onChange={handleChange('faq08')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="faq08">
              <Typography>Canais para Contato</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                viverra tortor eget diam euismod eleifend. Pellentesque
                sollicitudin non lorem at.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Container>
    </section>
  );
};

export default InfoTabs;
