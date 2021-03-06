import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Authorization from "../Authorization/Authorization";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#b39ddb"
  },
  item: {
    color: "#f3e5f5",
    fontSize: "20px",
    fontFamily: "Sriracha, cursive"
  },
  icon: {
    marginRight: "5px"
  },
  link: {
    textDecoration: "none",
    color: "#616161"
  },
  dialog: {
    backgroundColor: "#b39ddb"
  },
  dialogTitle: {
    color: "#f3e5f5",
    fontSize: "20px",
    textAlign: "center"
  },
  dialogItem: {
    textAlign: "center",
    fontSize: "20px",
    color: "#616161"
  },
  dialogItemLink: {
    margin: "0 auto",
    textDecoration: "none",
    color: "#616161"
  },
  button: {
    margin: "0 auto"
  }
});

export default function Navigation (props) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenuOpenChange = event => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >

            <Link to="/blog-app" className={classes.link}>
              <Button>
                <h1 className={classes.item}>My Stories</h1>
              </Button>
            </Link>

            <div>
              <Authorization
                classes={classes}
                openMenu={openMenu}
                handleMenuOpenChange={handleMenuOpenChange}
              />

            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
