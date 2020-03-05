import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import { PostsContext } from "../Main/Main";
import getUniqueId from "../Main/getUniqueId";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: 20
  }
}));

export default function CreateComments ({ post }) {
  const classes = useStyles();
  const { comments, setComments, isUserLoged } = useContext(PostsContext);
  const loggedUser = isUserLoged();

  const [comment, setComment] = React.useState("");

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const id = getUniqueId(comments) + 1;
    const postId = post.id;
    const authorId = loggedUser.id;
    const authorName = loggedUser.name;
    const date = new Date().toLocaleString();

    const updateComments = [...comments, { id, comment, postId, authorId, authorName, date }];
    localStorage.setItem("commentsStorage", JSON.stringify([...updateComments]));
    setComments([...updateComments]);
    setComment("");
  };

  return (
    <Grid container justify="center">
      <Grid item sm={9}>
        <TextField
          className={classes.textField}
          label="Comment"
          value={comment}
          onChange={handleComment}
          fullWidth
          multiline
          rows={2}
          rowsMax={4}
        />
        <Grid container direction="row-reverse">
          <IconButton color="primary" onClick={handleAddComment}>
            <DoneIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
