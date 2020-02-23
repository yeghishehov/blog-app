import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import {PostsContext} from '../Main/Main'
import { IconButton } from '@material-ui/core';

export default function ComentEditor ({thisComent, handleEditComent}) {
    const {coments, setComents} = useContext(PostsContext);

    const [coment, setComent] = React.useState(thisComent.coment);
    
    const handleComent = e => {
        setComent( e.target.value )
    }

    const handleAddComent = () => {
        const date = new Date().toLocaleString();

        const updateComents = coments.map(c => {
            if (c.id === thisComent.id){
                c.coment = coment;
                c.date = date;
            }
            return c;
        })

        localStorage.setItem('comentsStorage', JSON.stringify([...updateComents]));
        setComents([...updateComents]);
        handleEditComent();
    }

    return (
      <Grid container justify="center">
        <Grid item sm={12}>
                <TextField 
                    label="Coment"
                    value={coment}
                    onChange={handleComent}
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Grid container direction="row-reverse">
                    <IconButton color="primary"  onClick={handleAddComent}>
                        <DoneIcon />
                    </IconButton>
                </Grid>
        </Grid>
      </Grid>
    );
}