import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Button } from "@material-ui/core";
import CommentEditor from "./CommentEditor";
import deleteComment from "./deleteComment";
import { PostsContext } from "../Main/Main";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    marginTop: 10,
    backgroundColor: "#edeeff",
    wordWrap: "break-word",
    textAlign: "justify"
  },
  cardContent: {
    paddingTop: 0,
    fontSize: 18
  },
  button: {
    margin: 15
  }
});

export const Comment = ({ comment }) => {
  const classes = useStyles();
  const [isEditComment, setIsEditComment] = React.useState(false);
  const { isUserLoged, comments, setComments } = useContext(PostsContext);
  const logedUser = isUserLoged();

  const accessEdit = logedUser ? logedUser.id === comment.authorId : false;

  const handleEditComment = () => {
    setIsEditComment(!isEditComment);
  };

  return (
    <Card className={classes.card}>
      <Grid container justify="center">
        <Grid item sm={10} >
          <Grid container >
            {
              isEditComment
                ? (
                  <Grid item sm={12}>
                    <CommentEditor
                      handleEditComment={handleEditComment}
                      thisComment={comment}
                    />
                  </Grid>
                ) : (
                  <>
                    <Grid item sm={11}>
                      <CardHeader
                        title={comment.authorName}
                        subheader={comment.date}
                      />
                      <CardContent className={classes.cardContent} >
                        {comment.comment}
                      </CardContent>
                    </Grid>
                    {
                      accessEdit
                        ? (
                          <Grid item sm={1}>
                            <Button
                              className={classes.button}
                              color="primary"
                              onClick={handleEditComment}
                            >
                              <EditIcon />
                            </Button>
                            <Button
                              className={classes.button}
                              color="primary"
                              onClick={() => deleteComment(comment, comments, setComments)}
                            >
                              <DeleteIcon />
                            </Button>
                          </Grid>
                        ) : null}
                  </>
                )
            }

          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
