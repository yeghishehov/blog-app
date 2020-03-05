import React, { useContext } from "react";
import { PostsContext } from "../Main/Main";
import { makeStyles } from "@material-ui/core";
import { Comment } from "./Comment";

const useStyles = makeStyles({
  centered: {
    margin: "auto"
  }
});

export default function CommentsPost ({ post }) {
  const { comments } = useContext(PostsContext);
  const classes = useStyles();
  const commentsPost = comments.filter(comment => comment.postId === post.id);
  return (
    <div className={classes.centered}>
      {
        commentsPost.reduceRight((reverseComments, comment) =>
          ([...reverseComments,
            <Comment key={comment.id} comment={comment} />
          ])
        , [])
      }
    </div>
  );
}
