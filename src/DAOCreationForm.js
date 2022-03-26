//reactJS reqs
import {React, Component, useState} from 'react';

//material UI reqs
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

//file uploader widget reqs
import Uploady, { useItemProgressListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

//must be rendered inside <Uploady>
const LogProgress = () => {
    useItemProgressListener((item) => {
        console.log(`>>>>> (hook) File ${item.file.name} completed: ${item.completed}`);
    });

    return null;
}


class DAOCreationForm extends Component{

    render(){
        return(
            <div>
                <form>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                    <h1 style={{background:'white',color:'red'}}>John Doe</h1>
                    <h3 style={{color:'white'}}>Teacher</h3>
                    </Grid>
                    <Grid item>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500] }}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"
                        >
                            B
                        </Avatar>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500] }}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"
                        />
                        <Avatar src="/broken-image.jpg" />
                    </Stack>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value=""
                        onChange=""
                    />
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                        name="gender"
                        value=""
                        onChange=""
                        row
                        >
                        <FormControlLabel
                            key="male"
                            value="male"
                            control={<Radio size="small" />}
                            label="Male"
                        />
                        <FormControlLabel
                            key="female"
                            value="female"
                            control={<Radio size="small" />}
                            label="Female"
                        />
                        <FormControlLabel
                            key="other"
                            value="other"
                            control={<Radio size="small" />}
                            label="Other"
                        />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <Select
                        name="os"
                        value=""
                        onChange=""
                        >
                        <MenuItem key="mac" value="mac">
                            Mac
                        </MenuItem>
                        <MenuItem key="windows" value="windows">
                            Windows
                        </MenuItem>
                        <MenuItem key="linux " value="linux">
                            Linux
                        </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <div style={{ width: "400px" }}>
                        Favorite Number
                        <Slider
                        value=""
                        onChange=""
                        defaultValue={1}
                        step={1}
                        min={1}
                        max={3}
                        marks={[
                            {
                            value: 1,
                            label: "1",
                            },
                            {
                            value: 2,
                            label: "2",
                            },
                            {
                            value: 3,
                            label: "3",
                            },
                        ]}
                        valueLabelDisplay="off"
                        />
                    </div>
                    </Grid>
                    <Grid item>
                    <ImageList sx={{ width: 500, height: 450 }}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div">December</ListSubheader>
                        </ImageListItem>
                        {this.itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                </IconButton>
                                }
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    </Grid>
                    <Grid item>
                        <Uploady
                        destination={{ url: "https://my-server/upload" }}>
                            <UploadPreview
            fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"/>
                            <LogProgress/>   
                            <UploadButton/>
                        </Uploady>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                </Grid>


                </form>
            </div>

        )
    }

    itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
          cols: 2,
        },
    ];

}

export default DAOCreationForm;