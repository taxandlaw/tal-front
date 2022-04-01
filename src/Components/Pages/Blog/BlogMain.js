import React from 'react';
import {Grid, Box} from '@material-ui/core'
//components
import Category from '../Home/Category'
import SiteBlogs from '../Home/SiteBlogs'
import Banner from '../Home/Banner'
import Footer from '../Footer'
import axios from 'axios';
// import BlogTitle from './BlogTitle';
import DetailedView from './DetailedView';
import detailBlog from './DetailedView';
const BlogMain = () => {
    return (
        <>

<Grid container>
          <Grid item lg={6}  sm={6} xs={12}>
          <Category/>
          </Grid>
         
        <Grid container item lg={5} sm={5} xs={12}>

        <DetailedView/>
       

        </Grid>
      
      
        <Grid item lg={1} sm={1} xs={12} >
          {/* <BlogTitle/> */}
          </Grid>
            
          </Grid>
            
        </>
    )
}

export default BlogMain
