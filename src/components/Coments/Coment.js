import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
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
    cardContent: {
        paddingTop: 0,
        fontSize: 18,
    }
})

export const Coment = ({coment}) => {
    const classes = useStyles();

   return (  
        <Card className={classes.card}>
            <CardHeader 
                title={coment.authorName}
                subheader={coment.date}
            />
            <CardContent className={classes.cardContent} >
                {coment.coment}               
            </CardContent>
        </Card>
    )
}