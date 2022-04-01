import React from 'react';
// import axios from 'axios';
import { Box, Typography, makeStyles } from '@material-ui/core'

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
        fontSize: 12,
    },

    title:{
        fontSize: 18,
        fontWeight:600,
        padding: '0 10px 5px 10px', 
        textAlign: 'center'

    },

    desc:{
        fontSize: 14,
        wordBreak:'break-word',
        padding: '0 10px 5px 10px'
    }

})



const SiteBlog = ({blog}) => {
    const classes = useStyles();
    const url = blog.picture ? blog.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    const addElipsis =(str, limit)=>{
return str.length > limit ? str.substring(0,limit) + '...' : str;
    } 
    return (<>
 
        <Box  className={classes.container} 
       
        >
       

            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className = {classes.text}>{blog.category}</Typography>
            <Typography className = {classes.title}>{addElipsis(blog.title, 20)}</Typography>
            <Typography  className = {classes.text}>Author: {blog.author}</Typography>
            <Typography className = {classes.desc}>{addElipsis(blog.content, 80)}</Typography>
           
       
        </Box>
    

        </>
    )
}

export default SiteBlog
