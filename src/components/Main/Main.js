import React from 'react';
import Navigation from '../Navigation/Navigation'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import CreatePost from '../CreatePost/CreatePost';

const Main = () => {
    const [users, setUser] = React.useState([]);

    const hendle = () => {
        console.log(users)
    }

    return (
        <>
            <Navigation users={users} setUser={setUser}/>
            <button onClick={hendle}>ffffffffffff</button>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/create">
                    <CreatePost />
                </Route>
            </Switch>
        </>
    );
}

export default Main;