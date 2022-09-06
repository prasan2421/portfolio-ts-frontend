import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea, CardActions } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import BackgroundText from "../../components/BackgroundText";

import { GetStaticProps } from 'next'
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';

const portfolioArray= [
  {
    id: 0,
    nome: "Venus",
    valor: 15000.00,
    imageUrl:
      "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Marte",
    valor: 10000.00,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Saturno",
    valor: 5000.00,
    imageUrl:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg",
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Jupiter",
    valor: 135000.00,
    imageUrl:
      "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Asgard",
    valor: 95500.00,
    imageUrl:
      "https://fastly.4sqi.net/img/general/200x200/14230145_7d_kRyBPk1F4jYm4tiVGLHR66Yn7WoHctHd53HIuRpo.jpg",
    quantidade: 0,
  },
  {
    id: 5,
    nome: "Dagobah",
    valor: 90000.00,
    imageUrl: "https://f4.bcbits.com/img/a0980289374_10.jpg",
    quantidade: 0,
  }]

const CustomButton = styled(Button)({
 
    padding:'1rem 3rem 1rem 3rem'
   });

export default function HomeSectionSecond({  }: {  }) {
    const [checked, setChecked] = React.useState(true);
    const [mouseOverItem, setMouseOverItem] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    
    const containerRef = React.useRef(null);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const handleOpen = () => setOpen(true);

    const handlePopoverOpen = (index:any) => {
      setMouseOverItem(index)
    };
  

  return (

    <Box sx={{position:'relative', overflow: 'hidden', paddingTop:'3rem',paddingBottom:'10rem'}}>
    {/* <Box className="back-text" sx={{color: theme.palette.mode === 'dark' ?'rgba(255,255,255,0.04)':'rgba(78,78,78,0.15)'}}>WORK</Box> */}
    <BackgroundText text={'Work'}/>
    <Grid container sx={{paddingX: {xs:'2.5rem',md:'4.5rem'}, marginBottom:'5rem'}}>
      <Grid item xs={12} md={8}>
    <Slide direction="up" in={checked} container={containerRef.current}>
            <Box sx={{ color: 'inherit'}} >
          <Box className="PortfolioTitle ">
            
            <Grow in={checked} style={{ transformOrigin: '0 0 0' ,color:'inherit'}}
                {...(checked ? { timeout: 1000 } : {})}>
                    <Typography variant="h2">My Portfolio</Typography>
            </Grow>
           
          </Box>

          
          <Box className='subTitle'>
          <Typography variant="body1">A small gallery of recent projects chosen by me. I &apos ve done them all together with amazing people from companies around the globe. It &apos s only a drop in the ocean compared to the entire list.</Typography>
          <Typography variant="body1">Interested to see some more? Visit my work page.</Typography>
            </Box>
            
              <Box >
              </Box>
            </Box>
            </Slide>
      </Grid>
      <Grid item xs={12} md={4} sx={{display:'flex', marginTop:{xs:'3rem'}, justifyContent:{sm:'left', md:'center'}, alignItems:{sm:'left',md:'center'}}}>
     
                  <CustomButton variant="outlined" onClick={handleOpen}>See more!</CustomButton>
               
      </Grid>
      </Grid>
      <Grid container className="portfolioGallary">
     
      {portfolioArray.map((text, index) => (
        <Grid key={index} item xs={6} md={2.4} >
        <Card sx={{borderRadius:0}}>
        <CardActionArea 
       
       onMouseEnter={()=>handlePopoverOpen(index)}
       onMouseLeave={()=>handlePopoverOpen(null)} 
                        sx={{position:'relative'}} >
          <CardMedia
          className='media'
            component="img"
            image={`${text.imageUrl}`}
            
          />
         
          { mouseOverItem==index?(
              <Zoom in={true}>
            <Box
           
           className='PortfolioItemWrapper'>
                         <Box className='ViewProject'>
                           <p>View</p>
                           <p>Project</p>
                         </Box>
             
           </Box>
           </Zoom> 
          ):null}
          
          
       
        </CardActionArea>
        
        
      </Card>
           </Grid>
        ))}
               
      </Grid>
  </Box>
  );
}