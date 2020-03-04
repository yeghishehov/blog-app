import React, { useContext } from "react";
import { PostsContext } from "../Main/Main";
import { makeStyles } from "@material-ui/core";
import { Coment } from "./Coment";

const useStyles = makeStyles({
  centered: {
    margin: "auto"
  }
});

export default function ComentsPost ({ post }) {
  const { coments } = useContext(PostsContext);
  const classes = useStyles();
  const comentsPost = coments.filter(coment => coment.postId === post.id);
  return (
    <div className={classes.centered}>
      {
        comentsPost.reduceRight((reverseComents, coment) =>
          ([...reverseComents,
            <Coment key={coment.id} coment={coment} />
          ])
        , [])
      }
    </div>
  );
}
