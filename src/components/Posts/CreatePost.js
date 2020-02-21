import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import {PostsContext} from '../Main/Main'
import getUniqueId from '../Main/getUniqueId'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: '#edeeff',
    }
  }));

export default function CreatePost () {
    const classes = useStyles();
    const {posts, setPost, isUserLoged} = useContext(PostsContext);
    const loggedUser = isUserLoged();


    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    
    const handleTitle = e => {
        setTitle( e.target.value )
    }

    const handleContent = e => {
        setContent( e.target.value )
    }

    const handleAddPost = () => {
        const id = getUniqueId(posts) + 1;
        const authorId = loggedUser.id;
        const authorName = loggedUser.name;
        const date = new Date().toLocaleString();

        const updatePosts = [ ...posts, {id, title, content, authorId, authorName, date} ];
        localStorage.setItem('postsStorage', JSON.stringify([...updatePosts]));
        setPost([...updatePosts]);
    }

    if (!loggedUser) {
        return <Redirect to="/" />;
    }

    return (
      <Grid container justify="center">
        <Grid item sm={9}>
          <Paper className={classes.paper}>
            <Typography align="center">
                Tell us your story!
            </Typography>
            <Grid container>
              <Grid item sm={9}>
                <TextField
                    autoFocus
                    fullWidth
                    label="Title"
                    value={title}
                    onChange={handleTitle}
                />
              </Grid>
            </Grid>
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
              <Link to="/" >
                <IconButton color="primary"  onClick={handleAddPost}>
                  <DoneIcon />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }