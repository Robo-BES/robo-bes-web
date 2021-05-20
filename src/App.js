import React, {useEffect} from 'react';

import {
    Switch,
    Route,
    useLocation, BrowserRouter, Redirect
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import {focusHandling} from 'cruip-js-toolkit';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

// layouts

import Portfolios from "./layouts/Portfolios.js";

// views without layouts

import Landing from "./pages/Landing.js";
import Profile from "./pages/Profile.js";

import Amplify from 'aws-amplify';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Amplify.configure(
    {
        API: {
            endpoints: [
                {
                    name: 'FundService',
                    endpoint: 'https://g9om4btkvg.execute-api.eu-central-1.amazonaws.com/dev',
                },
            ]
        },
    })

function App() {

    const location = useLocation();

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
        focusHandling('outline');
    }, [location.pathname]); // triggered on route change

    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            console.log('Here');
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    return authState === AuthState.SignedIn && user ? (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/portfolios" component={Portfolios}/>
                {/* add routes without layouts */}
                <Route path="/landing" exact component={Landing}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/" exact component={Portfolios}/>
                {/* add redirect for first page */}
                <Redirect from="*" to="/"/>
                <Redirect from="/signin" to="/"/>
            </Switch>
        </BrowserRouter>
    ) : (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/signin">
                    <SignIn/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
