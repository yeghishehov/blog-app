import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';



export default function Login(props) {
    const {users, setUser} = props;
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUserLogin = e => {
        if (e.key === 'Enter') {
            setUser([...users, {name: userName, password: password, isLogged: true}]);
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
                    id="username"
                    label="Username"
                    variant="outlined"
                    onChange={handleEnteredUserName}
                    onKeyDown={handleUserLogin}
                    value={userName}
                />
            </ListItem>    
            <ListItem>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={handleEnteredPassword}
                    onKeyDown={handleUserLogin}
                    value={password}
                />
            </ListItem>       
        </List>
    )
}

