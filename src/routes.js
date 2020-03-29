import React from 'react';
// import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/pages/home';
import Route from './routes/public-routes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>    
        </Router>
    )
};

export default Routes;
