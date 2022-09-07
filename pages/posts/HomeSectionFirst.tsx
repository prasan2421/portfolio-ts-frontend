import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from '@mui/material/Link';
import Date from '../../components/date'
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { useSpring, animated } from '@react-spring/web';
import Backdrop from '@mui/material/Backdrop';
import { GetStaticProps } from 'next'
import TextField from '@mui/material/TextField';
import Send from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Move from "../../components/Move";
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';


const CustomButton = styled(Button)({
 
    padding:'1rem 3rem 1rem 3rem',
    // backgroundColor: '#fff',
    // '&:hover': {
    //   backgroundColor: '#d9f3ff',
     
    //   boxShadow: 'none',
    // },
    
  
    
   });

  

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
   
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


  interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
  }

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{xs:'100%',sm:'auto'},
    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function HomeSectionFirst(
  
  // { dateString }: { dateString: string }
  ) {
    const [checked, setChecked] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [openEmoji, setOpenEmoji] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEmoji = () => setOpenEmoji(true);
  const handleCloseEmoji = () => setOpenEmoji(false);

  const renderForm = (
    
    <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style}  component="form"
    
      noValidate
      autoComplete="off">
      <Container>
      <Box >
        <Box sx={{marginBottom:'20px'}}>
        <h1>Contact Me</h1>
        </Box>
        
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:{sm:0,md:'5px'}}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:{sm:0,md:'5px'} }}/>

                        <TextField id="outlined-basic" label="Subject" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'10px' }}/>
                        <TextField
                        id="outlined-basic" label="Message" variant="outlined"
                      
                            multiline
                            rows={4}
                            // defaultValue="You are awesome!!"
                            style={{display:'flex', width:'100%',marginBottom:'20px'}}
                          />      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="You are awesome!!"
          style={{display:'flex', width:'100%',marginBottom:'20px'}}
        />
        <Button sx={{display:'flex'}}>
          Send <Send />
        </Button>
      </Box>
    </Container>
      </Box>
    </Fade>
  </Modal>
  );

  const emojiForm=(
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEmoji}
        onClose={handleCloseEmoji}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEmoji}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              What&apos;s your reaction? (Select one or more)
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <InsertEmoticonIcon sx={{color:'#ffd100'}}/>
              </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <SentimentSatisfiedIcon sx={{color:'#ffd100'}} />
              </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <SentimentVeryDissatisfiedIcon sx={{color:'#ffd100'}} />
              </IconButton>
            </Stack>
            
          </Box>
        </Fade>
      </Modal>
  )

  // const downloadFile=()=>{
  //   fetch(path).then(response => {
  //     response.blob().then(blob => {
  //         // Creating new object of PDF file
  //         const fileURL = window.URL.createObjectURL(blob);
  //         // Setting various property values
  //         let alink = document.createElement('a');
  //         alink.href = fileURL;
  //         alink.download = 'PrasnnaCV.pdf';
  //         alink.click();
  //     })
  // })
  // }

  return (

    <Grid container sx={{height:'100vh',paddingX: {xs:'2.5rem',md:'4.5rem'}}}>  
    {renderForm}
    {emojiForm}
    <Grid item xs={12} style={{display:'flex', alignItems:'center'}}>
        <Slide direction="up" in={checked} 
        // container={containerRef.current}
        >
          <Box sx={{ color: 'inherit'}} >
        <Box className="introText">
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
          <Typography variant="h1"> Hi, </Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
                   <Typography variant="h1">I&apos;m Prasanna,</Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} className='introTextLast'
              {...(checked ? { timeout: 2000 } : {})}>
                  <Typography variant="h1">Front-end Developer</Typography>
          </Grow>
          
         
          
        </Box>
      <Box className='subTitle'><Typography variant="subtitle1">React | React Native | Growth Hacking Enthusiast</Typography></Box>
      <Box  sx={{marginTop:'50px', display:{sm:'flex'},  }}>
                <Box sx={{display:{xs:'flex'}, border:'5px solid ', borderRadius:'20px', overflow:'hidden', alignItems:{sm:'center'}, width:{xs:'100%',sm:'auto'},marginTop:{xs:'10px',sm:'0'} }}>
                  <CustomButton variant="text" 
                  onClick={handleOpen}
                   sx={{width:{xs:'100%',sm:'auto'},  color:"inherit", padding:{
                    xs:'1rem', sm:'1rem 3rem 1rem 3rem'
                  } }}>Contact Me</CustomButton>
               
                  <Box
                  // href={require("../assets/files/PrasannaCV.pdf")} 
                  sx={{width:{xs:'inherit'},borderLeft:'2px solid lightgray',borderColor:"inherit", }} 
                  // download underline="none"
                  >
                    <Link href={'files/PrasannaCV.pdf'} sx={
                    {color:"inherit"}
                  }
                    >
                      <CustomButton 
                      // onClick={downloadFile} 
                      sx={{width:{xs:'100%',sm:'auto'},color:"inherit", padding:{xs:'1rem', sm:'1rem 3rem 1rem 3rem'}}} 
                      variant="text" endIcon={<DownloadIcon color="inherit"/>} >CV</CustomButton>
                    </Link>
                  </Box>
                </Box>
                  <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'0',sm:'10px'}, marginTop:{xs:'10px',sm:'0'}, justifyContent:{xs:'center',sm:'left'} }}>
                  <IconButton disableRipple
                  onClick={handleOpenEmoji}
                    color="primary" aria-label="upload picture" component="label" sx={{padding:0,margoin:0}}>
                      <Move scale={1.5} springConfig={{ mass: 2, tension: 100, friction: 20 }} >
       
                        <AddReactionIcon   sx={{fontSize:'50px',color: '#ffd100',marginTop:'2px'}}/>
                     </Move>
                  </IconButton>
                 
                  </Box>
                </Box>
                
                
            <Box>
            </Box>
          </Box>
          </Slide>
    </Grid>
</Grid>
  );
}