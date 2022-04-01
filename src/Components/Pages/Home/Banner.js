import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
// import taxandlawlogo from '../../image/taxandlawlogo.jpg';


const useStyle = makeStyles({
image:{
background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
width: '100%',
height:'30vh',
// marginTop:64,
display:'flex',
alignItems:'center',
flexDirection:'column',
justifyContent:'center',
'& :first-child':{
color:'#FFFFFF',
fontSize: 66,
lineHeight:1.2
},
'& :last-child':{
  fontSize: 20,
  backgroundColor:'#FFFFFF'  
}
}

})


const Banner = () => {
const classes = useStyle();
const url =   'https://drive.google.com/drive/u/0/folders/1kmvCwkeeII2EOabcrpqKxNxLfiI-ckHF'
 
    return (
       <Box className = {classes.image}>
           {/* <Typography> */}
              {/* logo  */}
              <img src={url} alt="" className={classes.logo} />
           {/* </Typography> */}
           <Typography>
              The Tax and Legal Experts         </Typography>

       </Box>
    )
}

export default Banner
