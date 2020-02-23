import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import {PostsContext} from '../Main/Main'
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import { IconButton } from '@material-ui/core';


export default function PostEditor ({post, handleEditPost}) {
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
        <Grid container justify="center">
            <Grid item sm={12}>
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
                <Grid container direction="row-reverse">
                    <IconButton color="primary"  onClick={handleAddPost}>
                        <DoneIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
  }