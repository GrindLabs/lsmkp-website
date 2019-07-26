import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: '30px',
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#fff',
      },
    },
    MuiPickersDay: {
      day: {
        color: '#000',
      },
      isSelected: {
        color: '#fff',
        backgroundColor: '#f00',
      },
      daySelected: {
        color: '#fff',
        backgroundColor: '#000',
        ':hover': {
          backgroundColor: '#f00',
        },
      },
      current: {
        color: '#fff',
        backgroundColor: grey[400],
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: '#000',
        backgroundColor: grey[400],
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        '& button.MuiButton-textPrimary': {
          color: '#000',
        },
      },
    },
  },
});

export default theme;
