import React, { useContext } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Main/Main";

export default function Logout (props) {
  const { classes, handleMenuOpenChange } = props;
  const { users, setUser, isUserLoged } = useContext(UsersContext);
  const logedUser = isUserLoged();

  const handleLogout = () => {
    const usersWithoutCurrent = users.filter(
      user =>
        user.name !== logedUser.name && user.password !== logedUser.password
    );
    const updateUsers = [
      ...usersWithoutCurrent,
      { ...logedUser, isLogged: false }
    ];
    localStorage.setItem("usersStorage", JSON.stringify([...updateUsers]));
    setUser([...updateUsers]);

  };

  return (
    <div>
      <MenuItem className={classes.dialogItem} >
        <Link to="/create" className={classes.dialogItemLink} onClick={handleMenuOpenChange}>
            create new post
        </Link>
      </MenuItem>
      <MenuItem className={classes.dialogItem}>
        <Link to='/blog-app' className={classes.dialogItemLink} onClick={handleLogout}>
            Log out
        </Link>
      </MenuItem>
    </div>
  );
}
