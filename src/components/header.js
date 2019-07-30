import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '@material-ui/icons/DateRange';

const useStyles = makeStyles(theme => ({
  header: {
    background: '#000',
  },
  appBar: {
    background: '#000',
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
    </header>
  );
};

export default Header;
