import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
    
  },
  fullHeightCard: {
    height: '100%',
  
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    //border: 'solid 2px #5ACDEA',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',

    
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',

  },
  title: {
    margin: '20px 0 10px',
    padding: '5px 10px',
    color: '#000',
    //border: 'solid 2px #5ACDEA',
    display: 'flex'

  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  message: {
    color: '#333',
    padding: '0px 10px',

    //border: 'solid 2px #5ACDEA',

  },
  
});