import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {PostsContext} from '../Main/Main'

import DoneIcon from '@material-ui/icons/Done';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: 10,
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: '#edeeff',         
        wordWrap: 'break-word',
        textAlign: 'justify',
    },
  }));

export default function PostEditor ({post, handleEditPost}) {
    const classes = useStyles();
    const {posts, setPost} = useContext(PostsContext);

    const [title, setTitle] = React.useState(post.title);
    const [content, setContent] = React.useState(post.content);

    
    const handleTitle = e => {
        setTitle( e.target.value )
    }

    const handleContent = e => {
        setContent( e.target.value )
    }

    const handleAddPost = () => {
        const date = new Date().toLocaleString();

        const updatePosts = posts.map(p => {
            if (p.id === post.id){
                p.title = title;
                p.content = content;
                p.date = date;
            }
            return p;
        });
        
        localStorage.setItem('postsStorage', JSON.stringify([...updatePosts]));
        setPost([...updatePosts]);
        handleEditPost();
    }


    return (
        <div className={classes.card}>
            <TextField
                autoFocus
                fullWidth
                label="Title"
                value={title}
                onChange={handleTitle}
            />
            <TextField
                label="Content"
                value={content}
                onChange={handleContent}
                fullWidth
                multiline
                rows={10}
                rowsMax={10}
            />
            <IconButton color="primary"  onClick={handleAddPost}>
                <DoneIcon />
            </IconButton>
        </div>
    );
  }