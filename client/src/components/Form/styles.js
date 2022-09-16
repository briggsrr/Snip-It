import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
   
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '10px',
    
  },
  fileInput: {
    width: '100%',
    margin: '20px 5px',
    color: '#0b66c2'

  },
  buttonSubmit: {
    marginBottom: 10,
    background: '#fff',
    color: '#0b66c2',
   
  },
  buttonClear: {
    //marginBottom: 10,
    background: '#0b66c2',
    color: '#fff'
  
  },
  header1: {
    //marginBottom: 10,
    color: '#0b66c2',
  
  },
}));