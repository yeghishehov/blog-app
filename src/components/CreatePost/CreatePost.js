import React from 'react';
import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';



export default function CreatePost (props) {

    const {post, setPost} = React.useState({
      title: '',
      postid: '',
      content: '',
      userId: '',
    })


  // if (false) {
  //   return <Redirect to="/" />;
  // }

    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={9}>
          <Paper >
            <Typography align="center" variant="title">
              Tell us your story!
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <TextField
                  fullWidth
                  required
                  label="Title"
                  value={"tille"}
                  margin="normal"
                  placeholder="..."
                  
                />
              </Grid>
            </Grid>
            <TextField
              label="Content"
              margin="normal"
              required
              fullWidth
              multiline
              rows={10}
              rowsMax={10}
              placeholder="Write your post..."

            />
            <Grid container direction="row-reverse">
              <Button
                variant="fab"
                color="primary"
                aria-label="add"
              >
                <DoneIcon />
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }

