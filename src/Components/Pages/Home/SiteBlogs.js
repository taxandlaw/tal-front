import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Box} from '@material-ui/core';

// import axios from 'axios';
import {Grid} from '@material-ui/core'

//components
import SiteBlog from './SiteBlog'
import { getAllBlogs } from '../../../service/api';


const  SiteBlogs = () => {
const[blogs, setBlogs] = useState([]);




const{search} = useLocation();


useEffect(()=>{

    const fetchBlog = async ()=>{

        let data = await getAllBlogs(search);
        // console.log(data)

        setBlogs(data);

    }
    fetchBlog();
}, [search])

    return (<>
        {blogs.length ? blogs.map(blog =>(
        <Grid item lg={3} sm={4} xs = {12} 
        // key= {blog._id}
         >
            <Link to= {`/description/${blog._id}`} style={{textDecoration:'none', color:'inherit'}}>
                  
            
            <SiteBlog blog = {blog} />
            </Link>




        </Grid>
        )) : <Box style= {{color:'878787', margin: '30px 80px', fontSize: 18}}>
            No data is available for selected category
        </Box>
    
    
    }
        </> )
    }
    export default SiteBlogs;