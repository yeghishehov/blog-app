import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {PostsContext} from '../Main/Main';
import { makeStyles } from '@material-ui/core';
import PostEditor from './PostEditor';
import deletePost from './deletePost';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    card: {
        marginTop: 20,
        backgroundColor: '#edeeff',         
        wordWrap: 'break-word',
        textAlign: 'justify',
    },
    button: {
        margin: 15
    },
})

export const Post = ({post}) => {
    const {setSelectedPost, isUserLoged, posts, setPost, coments, setComents} = useContext(PostsContext);
    const classes = useStyles();
    const [isEditPost, setIsEditPost] = React.useState(false);
    const logedUser = isUserLoged();

    const accessEdit = logedUser ? logedUser.id === post.authorId : false;

    const handleLearnMore = () => {
        setSelectedPost(post)
    }

    const handleEditPost = () => {
        setIsEditPost(!isEditPost)
    }

   return (         
        <Card className={classes.card} >
            <Grid container justify="center">
                <Grid item sm={10} >
                    <Grid container  >
                        {
                            isEditPost 
                                ? (
                                    <Grid item sm={12}>
                                        <PostEditor post={post} handleEditPost={handleEditPost}/>
                                    </Grid>
                                )
                                : (
                                    <>
                                        <Grid item sm={11}>
                                            <CardHeader 
                                                title={post.title}
                                                subheader={`author: ${post.authorName}`}
                                            />
                                            <CardContent>
                                                {post.content}
                                                <br /> <br />
                                                {post.date}
                                            </CardContent>
                                        </Grid >
                                        {
                                            accessEdit
                                                ? (
                                                    <Grid item sm={1}  >
                                                        <Button 
                                                            className={classes.button}
                                                            color="primary"
                                                            onClick={handleEditPost}
                                                        >  
                                                            <EditIcon />
                                                        </Button>
                                                        <Link to='/blog-app'>
                                                            <Button
                                                                className={classes.button}
                                                                color="primary"
                                                                onClick={() => deletePost(post, posts, setPost, coments, setComents)}
                                                            >
                                                                <DeleteIcon />
                                                            </Button>
                                                        </Link>
                                                    </Grid>
                                                ) : null
                                        }
                                        {window.location.href.includes('post')
                                            ? ( 
                                                null
                                            ) : (
                                                <Grid container justify='flex-end'>
                                                    <Button 
                                                        className={classes.button} 
                                                        color="primary"
                                                        onClick={handleLearnMore}
                                                    >  
                                                        <Link to={`/post`} > Learn more </Link>
                                                    </Button>
                                                </Grid>
                                            )
                                        }
                                    </>

                                )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}