import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import { PostsContext } from "../Main/Main";
import { IconButton } from "@material-ui/core";

export default function CommentEditor ({ thisComment, handleEditComment }) {
  const { comments, setComments } = useContext(PostsContext);

  const [comment, setComment] = React.useState(thisComment.comment);

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const date = new Date().toLocaleString();

    const updateComments = comments.map(c => {
      if (c.id === thisComment.id) {
        c.comment = comment;
        c.date = date;
      }
      return c;
    });

    localStorage.setItem("commentsStorage", JSON.stringify([...updateComments]));
    setComments([...updateComments]);
    handleEditComment();
  };

  return (
    <Grid container justify="center">
      <Grid item sm={12}>
        <TextField
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
