import React, { createContext, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../Home/Home';
import CreatePost from '../Posts/CreatePost';
import { PostPage } from '../Posts/PostPage';

export const UsersContext = createContext();
export const PostsContext = createContext();

export default function Main () {
    const [users, setUser] = useState([]);
    const [posts, setPost] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [coments, setComents] = useState([]);

    const isUserLoged = () => {
        const user = users.find(user => user.isLogged === true);
        return user;
    }

    const hendle = () => {
        console.log(users)
        console.log(coments)
    }

    useEffect(() => {
        const date = new Date().toLocaleString();
        setUser([{id: 1, name: 'admin', password: 'admin', isLogged: false}]);
        setPost([{id: 1, title: 'my post', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                authorId: 1, authorName: 'admin', date: date}]);
    },[])

    return (
        <>
            <UsersContext.Provider value={{users, setUser, isUserLoged}}>
                <Navigation/>
            </UsersContext.Provider>
            <button onClick={hendle}>console.log(users)</button>
            
            <PostsContext.Provider value={{ posts, setPost,
                                            coments, setComents,
                                            users, isUserLoged,
                                            selectedPost, setSelectedPost}}
            >
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <CreatePost />
                    </Route>
                    <Route path='/post'>
                        <PostPage />
                    </Route>
                </Switch>
            </PostsContext.Provider>
            <Link to="/create" > go to create</Link> 
        </>
    );
}