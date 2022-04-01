import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {Box} from '@material-ui/core'
import Home from './Components/Pages/Home/Home'
import Routes from "./Components/Routes"
import Appbar from "./Components/Pages/Appbar"
import Footer from "./Components/Pages/Footer"
// import AppWithRouterAccess from './AppWithRouterAccess';

const App = () =>{



  return (
    <>
        <Router>
        {/* <AppWithRouterAccess/> */}
        
        <Appbar/>
        <Box style={{marginTop:64}}>
        
        <Routes/>
        
        </Box>
        <Footer/>
        </Router>
   
   
    </>
  );
}

export default App;
