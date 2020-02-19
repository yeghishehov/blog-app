import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Authorization from '../Authorization/Authorization'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: '#b39ddb',
  },
  item: {
    color: '#f3e5f5',
    fontSize: '20px',
    fontFamily: 'Sriracha, cursive',    
  },
  icon:{
    marginRight: '5px',
  },
  link: {
    textDecoration: 'none',    
    color: '#616161',
  },
  dialog:{
    backgroundColor: '#b39ddb',
  },
  dialogTitle:{
    color: '#f3e5f5',
    fontSize: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  dialogItem:{
    textAlign: 'center',
    fontSize: '20px',
    color: '#616161',
  },
  dialogItemLink:{
    margin: '0 auto',
    textDecoration: 'none',    
    color: '#616161',
  }
}));

export default function Navigation(props) {
  const classes = useStyles();    
  const [openMenu, setOpenMenu] = React.useState(false);
  const {users, setUser} = props;

  const handleMenuOpenChange = event => {
    setOpenMenu(!openMenu)
  }; 
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >

            <Link to="/" className={classes.link}>
                <Button className={classes.item}>              
                     My Stories
                </Button>
            </Link>

              
            <div>
                <Authorization 
                    classes={classes}
                    openMenu={openMenu} 
                    handleMenuOpenChange={handleMenuOpenChange} 
                    users={users} 
                    setUser={setUser} 
                />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
