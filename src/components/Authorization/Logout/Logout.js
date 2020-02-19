import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


export default function Logout(props) {
    const {users, setUser, classes, handleMenuOpenChange} = props;

    const userIndex = users.findIndex(user => user.isLogged === true);

    const handleLogout = e => {
        users[userIndex].isLogged=false;
        setUser([...users]);
    }

    return (
            <div>      
                <MenuItem className={classes.dialogItem} >
                    <Link to="/create" className={classes.dialogItemLink} onClick={handleMenuOpenChange}>
                        create new post
                    </Link>
                </MenuItem>
                <MenuItem className={classes.dialogItem}>
                    <Link to='/' className={classes.dialogItemLink} onClick={handleLogout}>
                        Log out
                    </Link>
                </MenuItem>          
            </div>
    )
}