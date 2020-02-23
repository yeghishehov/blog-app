import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import ComentEditor from './ComentEditor';
import deleteComent from './deleteComent';
import {PostsContext} from '../Main/Main';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
        marginTop: 10,
        backgroundColor: '#edeeff',         
        wordWrap: 'break-word',
        textAlign: 'justify',
    },
    cardContent: {
        paddingTop: 0,
        fontSize: 18,
    },
    button: {
        margin: 15
    },
})

export const Coment = ({coment}) => {
    const classes = useStyles();
    const [isEditComent, setIsEditComent] = React.useState(false);
    const {isUserLoged, coments, setComents} = useContext(PostsContext);
    const logedUser = isUserLoged();

    const accessEdit = logedUser ? logedUser.id === coment.authorId : false;

    const handleEditComent = () => {
        setIsEditComent(!isEditComent)
    }

   return ( 
       <Card className={classes.card}> 
       <Grid container justify="center">
        <Grid item sm={10} >
        <Grid container  >
            {        
            isEditComent
                ? (
                    <Grid item sm={12}>
                        <ComentEditor 
                            handleEditComent={handleEditComent}
                            thisComent={coment}
                        />
                    </Grid>
                ) : (  
                    <>  
                        <Grid item sm={11}>       
                            <CardHeader 
                                title={coment.authorName}
                                subheader={coment.date}
                            />
                            <CardContent className={classes.cardContent} >
                                {coment.coment}               
                            </CardContent>
                        </Grid>
                        {                                    
                            accessEdit
                                ? (
                                    <Grid item sm={1}> 
                                        <Button 
                                            className={classes.button} 
                                            color="primary"
                                            onClick={handleEditComent}
                                        >  
                                            <EditIcon />
                                        </Button>
                                        <Button
                                            className={classes.button}
                                            color="primary"
                                            onClick={() => deleteComent(coment, coments, setComents)}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </Grid>
                                ) : null}
                    </>
                )
            }
        
            </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}