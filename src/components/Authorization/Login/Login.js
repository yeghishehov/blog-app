import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {UsersContext} from '../../Main/Main';
import getUniqueId from '../../Main/getUniqueId';


export default function Login(props) {
    const {classes} = props;
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {users, setUser} = useContext(UsersContext);

    const handleLogin = () => {
        if(userName !== '' && password !== ''){
            const userIndex = users.findIndex(user => userName === user.name && password === user.password);
            if(userIndex > -1){                
                users[userIndex].isLogged=true;
                setUser([...users])
            } else {
                const id = getUniqueId(users) + 1;
                setUser([...users, {id, name: userName, password, isLogged: true}]);
            }
        }        
    }
    
    const handleLoginEnter = e => {
        if (e.key === 'Enter') {
            handleLogin();
        }        
    }

    const handleEnteredUserName = e => {
        setUserName( e.target.value )
    }

    const handleEnteredPassword = e => {
        setPassword( e.target.value )
    }


    return(
        <List> 
            <ListItem>
                <TextField
                    label="Username"
                    variant="outlined"
                    onChange={handleEnteredUserName}
                    onKeyDown={handleLoginEnter}
                    value={userName}
                    autoFocus
                />
            </ListItem>    
            <ListItem>
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={handleEnteredPassword}
                    onKeyDown={handleLoginEnter}
                    value={password}
                />
            </ListItem>
            <ListItem>
                <Button
                    onClick={handleLogin}
                    className={classes.button}
                    color="primary" 
                    aria-label="add"
                >
                    Log in 
                </Button>
            </ListItem>
        </List>
    )
}

