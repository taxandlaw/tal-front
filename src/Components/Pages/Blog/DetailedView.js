import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
// import { flexbox } from '@material-ui/system';
import renderHTML from 'react-render-html';
import {deleteBlog, getBlog} from '../../../service/api';

//component
// import BlogTitle from './BlogTitle';
// import SiteBlogs from '../Home/SiteBlogs';
import Comments from './comments/Comments';


const useStyles = makeStyles((theme) => ({
  container:{
    padding:'0 100px',
    [theme.breakpoints.down('sm')]:{
      padding:0
    }
  },
  image:{
    width:'100%',
    height:'30vh',
    objectFit:'cover',

    [theme.breakpoints.down('xs')]:{
      height:'20vh'
    }
  },
  icons: {
    float: 'right'
},
icon: {
    margin: 5,
    padding: 5,
    border: '1px solid #878787',
    borderRadius: 10
},

  heading:{
    fontSize:32,
    fontWeight: 400,
    textAlign:'center',
    margin:'30px 0 10px 0'
  },
  subheading:{
    color:'#878787',
    display: 'flex',
    margin:'20px 0',

    [theme.breakpoints.down('xs')]:{
      display:'block',
      textAlign:'center',
      margin:'5px 0'
    }

  },

  content:{
    
    padding:'0 20px 0 20px',

    [theme.breakpoints.down('xs')]:{
      display:'block',
      textAlign:'center',
      margin:'5px 0'
    }

  },
  link : {
    textDecoration: 'none',
    color: 'inherit'
  }



})
)

//websiteBlog

const DetailedView = ({match, websiteBlog}) => {
  const classes = useStyles();
 
  const [detailBlog, setDetailBlog] = useState('');
  
  const history = useHistory();
 
  const url = detailBlog.picture? detailBlog.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
 
 
  useEffect(() =>{
   const fetchData = async() => {
let data = await getBlog(match.params.id);

setDetailBlog(data)

   }
   
   fetchData();
    
}, [match.params.id]);

const deletePost = async () => {    
  await deleteBlog(detailBlog._id);
  history.push('/')
}
// console.log(detailBlog);

return (

  <>
  <Box className = {classes.container}>
          <img src={url} alt='banner' className={classes.image}/>
          <Box className={classes.icons}>
                {   
                     
                    <>  
                   {/* <Link to={`/update/${detailBlog._id}`}>   */}
                      <Edit className={classes.icon} color="primary"/>
                      {/* </Link> */}
                    <Link>   
                     <Delete 
                    //  onClick={() => deletePost()} 
                     className={classes.icon} color="error" /></Link>
                    </>
                }
            </Box>
          
          
          
          <Typography className={classes.heading}>{renderHTML(detailBlog && detailBlog.title)}</Typography>

<Box className={classes.subheading}>
  <Link  to= {`/?author=${detailBlog.author}`} className={classes.link}>
  <Typography >Author: <span  style={{fontWeight:600}}>{detailBlog.author}</span></Typography>
  </Link>
 
  <Typography style ={{marginLeft:'Auto'}}> {detailBlog.createdAt}</Typography>

</Box>


<Typography className={classes.content}>{renderHTML(detailBlog && detailBlog.content)}</Typography>

<Comments detailBlog = {detailBlog} />


        </Box>



        </>
        
        )
    }
 
    
   
  
    export default DetailedView;
 
  
  
  
  