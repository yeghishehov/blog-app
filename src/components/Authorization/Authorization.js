import React, { useContext } from "react";
import AccountIcon from "@material-ui/icons/AccountCircle";
import LogInIcon from "@material-ui/icons/ExitToAppTwoTone";
import Button from "@material-ui/core/Button";
import Logout from "./Logout/Logout";
import Login from "./Login/Login";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { UsersContext } from "../Main/Main";

export default function Authorization (props) {
  const { classes } = props;
  const { openMenu, handleMenuOpenChange } = props;

  const { isUserLoged } = useContext(UsersContext);

  const loggedUser = isUserLoged();

  const username = loggedUser ? loggedUser.name : null;

  return (
    <div>
      <Button
        className={classes.item}
        onClick={handleMenuOpenChange}
      >
        {loggedUser
          ? <> <AccountIcon className={classes.icon} /> <h1 className={classes.item}>{username}</h1> </>
          : <> <LogInIcon className={classes.icon} />   <h1 className={classes.item}> Log in </h1> </>
        }
      </Button>

      <Dialog
        onClose={handleMenuOpenChange}
        open={openMenu}
        PaperProps={{ className: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle}>
          {loggedUser ? username : "Login to My Stories"}
        </DialogTitle>

        {loggedUser
          ? (
            <Logout
              classes={classes}
              handleMenuOpenChange={handleMenuOpenChange}
            />
          ) : (
            <Login
              classes={classes}
            />
          )}
      </Dialog>
    </div>
  );
}
