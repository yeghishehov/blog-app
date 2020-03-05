import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { UsersContext } from "../../Main/Main";
import getUniqueId from "../../Main/getUniqueId";

export default function Login (props) {
  const { classes } = props;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { users, setUser } = useContext(UsersContext);

  const handleLogin = () => {
    if (userName !== "" && password !== "") {
      const registeredUser = users.find(user => userName === user.name && password === user.password);

      if (registeredUser) {
        const usersWithoutCurrent = users.filter(
          user =>
            user.name !== registeredUser.name &&
            user.password !== registeredUser.password
        );

        const updateUsers = [...usersWithoutCurrent, { ...registeredUser, isLogged: true }];

        localStorage.setItem("usersStorage", JSON.stringify([...updateUsers]));
        setUser([...updateUsers]);
      } else {
        const id = getUniqueId(users) + 1;
        const updateUsers = [...users, { id, name: userName, password, isLogged: true }];
        localStorage.setItem("usersStorage", JSON.stringify([...updateUsers]));
        setUser([...updateUsers]);
      }
    }
  };

  const handleLoginEnter = e => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleEnteredUserName = e => {
    setUserName(e.target.value);
  };

  const handleEnteredPassword = e => {
    setPassword(e.target.value);
  };

  return (
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
  );
}
