import React, { useContext } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {UsersContext} from '../../Main/Main';

export default function Logout(props) {
    const {classes, handleMenuOpenChange} = props;
    const {users, setUser} = useContext(UsersContext);

    const handleLogout = e => {
        const userIndex = users.findIndex(user => user.isLogged === true);
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