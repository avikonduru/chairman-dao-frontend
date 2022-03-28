import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';


class DAOFounderGrid extends React.Component {
    render(){

        const Img = styled('img')({
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        });

        //var dataObj = this.props.dataFromParent.data;

        return (
        <Grid container spacing={4} direction={"row"} minwidth={"75%"}>
            <Grid item xs={3}>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={this.props.imgURL} />
                </ButtonBase>
            </Grid>
            <Grid item xs={3} sm container width={"75%"}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                        {this.props.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid item 
                    xs={12}
                >
                    <TextField
                        id={this.props.author}
                        label="# of Tokens"
                        placeholder="100"
                    />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid item>
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        );
    }    
}

export default DAOFounderGrid;