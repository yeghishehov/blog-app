import React, { useContext } from "react";
import { PostsContext } from "../Main/Main";
import { Post } from "../Posts/Post";
import Grid from "@material-ui/core/Grid";

export default function Home () {
  const { posts } = useContext(PostsContext);

  return (
    <Grid container spacing={3} justify="center">
      {
        posts.reduceRight((reversePosts, post) =>
          ([...reversePosts,
            <Grid item sm={7} key={post.id}>
              <Post post={post} />
            </Grid>
          ])
        , [])
      }
    </Grid>
  );
}
