import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Thumbs from './pages/Thumbs';
import Details from './pages/Details';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Thumbs}/>
                <Route exact path='/Details' component={Details}/>
            </Switch>
        </BrowserRouter>
    )
}