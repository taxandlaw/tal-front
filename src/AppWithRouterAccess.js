import React from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import {Security, SecureRoute,LoginCallback} from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import {Box} from '@material-ui/core'
import { oktaAuthConfig, oktaSignInConfig } from './config';


///components
import Home from "./Components/Pages/Home/Home";
import Appbar from "./Components/Pages/Appbar";
import Footer from "./Components/Pages/Footer";
import DetailedView from "./Components/Pages/Blog/DetailedView"
import About from "./Components/Pages/Acts/Acts"
// import BlogMain from './Components/Pages/Blog/BlogMain';
import CreateView from "./Components/Pages/Blog/CreateView"
import UpdateView from './Components/Pages/Blog/UpdateView';
// import { Security } from '@okta/okta-react/bundles/types';
import Login from './account/Login';
import Routes from './Components/Routes';


const oktaAuth = new OktaAuth(oktaAuthConfig);
const AppWithRouterAccess = () => {
    const history = useHistory();
    const customAuthHandler = () => {
        history.push('/login');
    };
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };
    return (
        <>
            <Security
                oktaAuth={oktaAuth}
                onAuthRequired={customAuthHandler}
                restoreOriginalUri={restoreOriginalUri}
            >
        {/* <Appbar/> */}
                
                
                <SecureRoute path='/' component={Appbar} />

                <Appbar/>
        {/* <Box style={{marginTop:64}}>
        
        <Routes/>
        <Switch>
        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                        <Route path='/login/callback' component={LoginCallback} />

                        </Switch>

        </Box> 
        <Footer/>  */}

                <Box style={{ marginTop: 64 }}>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                        <Route path='/login/callback' component={LoginCallback} />
                        <Route exact path='/description/:slug' component={DetailedView} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/create' component={CreateView} />
                        <Route exact path='/update/:slug' component={UpdateView} />
                    </Switch>

                </Box>
<Footer/>
            </Security>
        </>
    )
}

export default AppWithRouterAccess;
