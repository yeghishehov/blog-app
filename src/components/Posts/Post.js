import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {PostsContext} from '../Main/Main';
import { makeStyles } from '@material-ui/core';
import PostEditor from './PostEditor';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    card: {
        marginTop: 10,
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: '#edeeff',         
        wordWrap: 'break-word',
        textAlign: 'justify',
    },
    button: {
        left: '70%',
        marginBottom: 10
    },
})

export const Post = ({post}) => {
    const {setSelectedPost, isUserLoged} = useContext(PostsContext);
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
        <Card className={classes.card}>
            {
                isEditPost 
                    ? (
                        <PostEditor post={post} handleEditPost={handleEditPost}/>
                    )
                    : (
                        <>
                            <CardHeader 
                                title={post.title}
                                subheader={`author: ${post.authorName}`}
                            />
                            <CardContent>
                                {post.content}
                                <br /> <br />
                                {post.date}
                            </CardContent>
                            {window.location.href.includes('post')
                                ? ( 
                                    accessEdit
                                        ? (
                                            <Button 
                                                className={classes.button} 
                                                color="primary"
                                                onClick={handleEditPost}
                                            >  
                                                <EditIcon />
                                            </Button>
                                        ) : null
                                ) : (
                                    <Button 
                                        className={classes.button} 
                                        color="primary"
                                        onClick={handleLearnMore}
                                    >  
                                        <Link to={`/post`} > Learn more </Link>
                                    </Button>
                                )
                            }
                        </>
                    )
            }
        </Card>
    )
}