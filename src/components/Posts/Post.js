import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {PostsContext} from '../Main/Main';
import { makeStyles } from '@material-ui/core';

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
    const {setSelectedPost} = useContext(PostsContext);
    const classes = useStyles();

    const handlseClick = () => {
        setSelectedPost(post)
    }

   return (  
        <Card className={classes.card}>
            <CardHeader 
                title={post.title}
                subheader={`author: ${post.authorName}`}
            />
            <CardContent>
                {post.content}
                <br /> <br />
                {post.date}
            </CardContent>
            {window.location.href === 'http://localhost:3000/post'
                ? null
                : (
                    <Button 
                        className={classes.button} 
                        color="primary"
                        onClick={handlseClick}
                    >  
                        <Link to={`/post`} > Learn more </Link>
                    </Button>
                )
            }
        </Card>
    )
}