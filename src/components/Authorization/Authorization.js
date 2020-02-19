import React from 'react';
import AccountIcon from '@material-ui/icons/AccountCircle';
import LogInIcon from '@material-ui/icons/ExitToAppTwoTone';
import Button from '@material-ui/core/Button';
import Logout from './Logout/Logout';
import Login from './Login/Login'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


export default function Authorization(props) {
    const {users, setUser, classes} = props;
    const {openMenu, handleMenuOpenChange} = props;

    const isLogged = users.some(user => user.isLogged === true)

    const username = isLogged 
                        ? users.find( user => user.isLogged === true ).name 
                        : null; 

    return (
        <div>
            <Button 
                className={classes.item}
                onClick={handleMenuOpenChange}
            >
                {isLogged
                    ? <> <AccountIcon className={classes.icon} /> <h1 className={classes.item}>{username}</h1> </>
                    : <> <LogInIcon className={classes.icon} />    Log in  </>
                }
            </Button>


            <Dialog 
                onClose={handleMenuOpenChange} 
                open={openMenu}  
                PaperProps={{className: classes.dialog }}
            >
                <DialogTitle className={classes.dialogTitle}>
                    {isLogged ? username : "Log in"}
                </DialogTitle>

                {isLogged
                    ? (     
                        <Logout
                            classes={classes}
                            handleMenuOpenChange={handleMenuOpenChange} 
                            users={users} 
                            setUser={setUser}
                        /> 
                    ) : (
                        <Login
                            users={users} 
                            setUser={setUser} 
                        />
                    )}
            </Dialog>
        </div>
    )
}