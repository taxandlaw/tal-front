import React from 'react'
import { Switch, Route } from "react-router-dom";
///components
import Home from "./Pages/Home/Home"

import DetailedView from "./Pages/Blog/DetailedView"
import Acts from "./Pages/Acts/Acts"
import CreateView from "./Pages/Blog/CreateView"
import UpdateView from './Pages/Blog/UpdateView';
const Routes = () => {
    return (
        <>
            <Switch>

                <Route exact path ='/' component = {Home}/>
                <Route exact path ='/description/:id' component = {DetailedView}/>
                <Route exact path ='/acts' component = {Acts}/>
                <Route exact path='/create' component={CreateView} /> 
                <Route exact path='/update/:id' component={UpdateView} />





                {/* <Route exact path='/' render={() => {
                    return (
                        <>
                       
                            <Home />
                           
                            
                        </>
                    )
                }}>

                </Route> */}






            </Switch> 

           
        
        </>
    )
}

export default Routes;
