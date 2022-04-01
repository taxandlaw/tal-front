// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import { Typography, makeStyles } from '@material-ui/core'
// import websiteBlogs from '../../../../../server/models/websiteBlogs';

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 15,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            padding: '0 0px 5px 0'

        }
    },

    image: {
        height: 100,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },

    text:{
        color:'#878787',
        fontSize: 12
    },

    title:{
        fontSize: 18,
        fontWeight:600

    },

    desc:{
        fontSize: 14,
        wordBreak:'break-word'
    }

})



const HomeTitle = () => {
    const classes = useStyles();
    // const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
     
    return (<>
 
        

          <Typography className = {classes.title}>websiteBlog.title</Typography>
            
     

        </>
    )
}

export default HomeTitle
