//reactJS reqs
import * as React from 'react';

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
import AvatarGroup from '@mui/material/AvatarGroup';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DAOFounderGrid from './DAOFounderGrid';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';



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



class DAOCreationForm extends React.Component{
    
    
    constructor(props){
        super(props);

       
    }

    render(){
        const Input = styled('input')({
            display: 'none',
        });

        return(
            <div>
                <form>
                <Grid container 
                    alignItems="center" 
                    justify="center" 
                    direction="column"
                    xs={10}    
                >
                

                <Grid container
                    rowSpacing={2} 
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    alignItems="center" 
                    justify="center" 
                    direction="column"
                >
                    

                    <Grid item xs={12}>
                    <h1 sx={{ color: 'text.primary' }}>Create your DAO</h1>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField sx={{ color: 'text.primary'}}
                        id="DAOName-input"
                        name="DAOName"
                        label="Name of DAO"
                        placeholder="Chad's DAO"
                        
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        id="DAODescription"
                        label="Description of DAO"
                        placeholder="The world's largest community of Chads"
                        multiline
                        />
                    </Grid>
                    <Grid item 
                        xs={12}
                        alignItems="center" 
                        justify="center" 
                        direction="column"
                    >
                        <FormControl>
                        <FormLabel>Create new wallet for this DAO?</FormLabel>
                        <RadioGroup
                            row
                            id="DAOWalletSettings"
                            name="DAOWalletType"
                            onChange={() =>
                                alert("radio clicked")
                            }
                        >
                        <FormControlLabel
                            key="createNewWallet"
                            value="0"
                            control={<Radio size="small" />}
                            label="Create a Wallet for me"                        />
                        <FormControlLabel
                            key="bringWallet"
                            value="1"
                            control={<Radio size="small" />}
                            label="I want to connect my wallet"
                        />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField
                        id="WalletAddr"
                        label="Wallet Adress"
                        placeholder="0x000"
                        disabled={true}
                        sx={{ display: 'none' }}
                        />
                    </Grid>
                    <Grid item>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                        Upload NFT IMG
                        </Button>
                    </label>
                    </Grid>
                </Grid>

                <Grid container
                    rowSpacing={3} 
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    alignItems="center" 
                    justify="center" 
                    direction="column"
                >
                    
                    <Grid item>
                    <h2>DAO Founders</h2>
                    </Grid>

                    <Grid item>
                        <AvatarGroup max={4}>
                            {this.itemData.map((item) => (
                            <Avatar
                                sx={{ width: 56, height: 56 }}
                                alt={item.author}
                                src={item.img}
                            >
                            </Avatar>
                            ))}
                        </AvatarGroup>
                    </Grid>
                </Grid>  

                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    columns={16}
                >
                    
                    {this.itemData.map((itemObj) => (
                        <Box 
                            sx={{ p: 2, 
                            border: '1px dashed grey',
                            width:'100%' 
                            }}
                        >
                            <Grid item>
                            <DAOFounderGrid 
                                imgURL={itemObj.img}
                                id={itemObj.title}
                                name={itemObj.author}
                            >
                            </DAOFounderGrid>
                        </Grid>   
                        </Box>
                        
                    ))}
                </Grid>
                    <Grid container
                        rowSpacing={2} 
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        alignItems="center" 
                        justify="center" 
                        direction="column"
                    >
                        
                        <Button variant="contained" 
                            color="primary" 
                            type="submit"
                            endIcon={<SendIcon />}
                        >
                            Create DAO
                        </Button>
                    </Grid>
                    
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