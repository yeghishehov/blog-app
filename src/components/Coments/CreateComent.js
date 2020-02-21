import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import {PostsContext} from '../Main/Main'
import getUniqueId from '../Main/getUniqueId'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textField: {
        marginTop: 20,
    }
  }));

export default function CreateComents ({post}) {
    const classes = useStyles();
    const {coments, setComents, isUserLoged} = useContext(PostsContext);
    const loggedUser = isUserLoged();

    const [coment, setComent] = React.useState('');
    
    const handleComent = e => {
        setComent( e.target.value )
    }

    const handleAddComent = () => {
        const id = getUniqueId(coments) + 1;
        const postId = post.id;
        const authorId = loggedUser.id;
        const authorName = loggedUser.name;
        const date = new Date().toLocaleString();
        setComents([...coments, {id, coment, postId, authorId, authorName, date} ]);
        setComent('');
    }

    return (
      <Grid container justify="center">
        <Grid item sm={9}>
                <TextField 
                    className={classes.textField}
                    label="Coment"
                    value={coment}
                    onChange={handleComent}
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Grid container direction="row-reverse">
                    <IconButton color="primary"  onClick={handleAddComent}>
                        <DoneIcon />
                    </IconButton>
                </Grid>
        </Grid>
      </Grid>
    );
}