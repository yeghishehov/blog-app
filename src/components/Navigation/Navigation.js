import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilterVintageTwoToneIcon from '@material-ui/icons/FilterVintageTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Login from '../Login/Login'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: '#D2691E',
  },
  item: {
    color: '#FFE4C4',
    textTransform: 'capitalize',
    textIndent: '15px',
    'font-family': 'Sriracha, cursive',
  },
  link: {
    textDecoration: 'none',
  },
}));















export default function ButtonAppBar() {
  const classes = useStyles();    
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleChange = event => {
    setOpenLogin(!openLogin)
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

            <Link exact  to="/home" className={classes.link}>
             <IconButton className={classes.item} >              
                <FilterVintageTwoToneIcon />                
                  My Stories
            </IconButton>
            </Link>

              
            {/* <Link to="/home/login" className={classes.link}> */}
            <div>
              <Button  className={classes.item}  onClick={handleChange}>
                <AccountCircleIcon />
                Log in
              </Button>

              <Login openLogin={openLogin} handleChange={handleChange} />

              </div>
            {/* </Link> */}

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
