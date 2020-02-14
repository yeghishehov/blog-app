import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function Login(props) {
    const {openLogin, handleChange} = props;

    return (
        <Menu
            id="menu-appbar"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={openLogin}
        >
            <MenuItem onClick={handleChange}>login</MenuItem>
            <MenuItem onClick={handleChange}>password</MenuItem>
        </Menu>
    )
}