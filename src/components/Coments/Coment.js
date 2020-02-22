import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import ComentEditor from './ComentEditor';
import {PostsContext} from '../Main/Main';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';



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
    const [isEditComent, setIsEditComent] = React.useState(false);
    const {isUserLoged} = useContext(PostsContext);
    const logedUser = isUserLoged();

    const accessEdit = logedUser ? logedUser.id === coment.authorId : false;

    const handleEditComent = () => {
        setIsEditComent(!isEditComent)
    }

   return ( 
       <Card className={classes.card}> 
            {        
            isEditComent
                ? <ComentEditor 
                    handleEditComent={handleEditComent}
                    thisComent={coment}
                />
                : (  
                    <>         
                        <CardHeader 
                            title={coment.authorName}
                            subheader={coment.date}
                        />
                        <CardContent className={classes.cardContent} >
                            {coment.coment}               
                        </CardContent>
                        {                                    
                            accessEdit
                                ? (
                                    <Button 
                                        className={classes.button} 
                                        color="primary"
                                        onClick={handleEditComent}
                                    >  
                                        <EditIcon />
                                    </Button>
                                ) : null}
                    </>
                )
            }
        

        </Card>
    )
}