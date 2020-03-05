import React, { useContext } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { PostsContext } from "../Main/Main";
import { Post } from "./Post";
import { makeStyles, Button } from "@material-ui/core";
import CreateComments from "../Comments/CreateComment";
import CommentsPost from "../Comments/CommentsPost";

const useStyles = makeStyles({
  centered: {
    width: "70%",
    margin: "auto"
  },
  link: {
    textDecoration: "none",
    margin: "auto"
  }
});

export function PostPage () {
  const { selectedPost, isUserLoged } = useContext(PostsContext);
  const classes = useStyles();

  const loggedUser = isUserLoged();

  if (!loggedUser) {
    return (
      <Dialog open={true} aria-labelledby="simple-dialog-title" >
        <DialogTitle id="simple-dialog-title">Please log in to your account</DialogTitle>
        <Link to='/blog-app' className={classes.link}>
          <Button > ok </Button>
        </Link>
      </Dialog>
    );
  }

  return (
    <div className={classes.centered}>
      <Post post={selectedPost} loggedUser={loggedUser} />
      <CreateComments post={selectedPost} />
      <CommentsPost post={selectedPost} />
    </div>
  );
}
