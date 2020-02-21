import React, { useContext } from 'react';
import {PostsContext} from '../Main/Main';
import { makeStyles } from '@material-ui/core';
import { Post } from '../Posts/Post';


const useStyles = makeStyles({
    centered: {
        width: '50%',
        margin: 'auto',
    },
})


export default function Home() {
    const {posts} = useContext(PostsContext);
    const classes = useStyles();

    return (
        <div className={classes.centered}>
            {
                posts.reduceRight ( (reversePosts, post) => 
                    ([...reversePosts,
                        <Post key={post.id} post={post} />
                    ])
                ,[])
            }
        </div>
    )
}