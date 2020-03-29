import React from 'react';
import { Route } from 'react-router-dom';
import Root from '../components/root';

const PublicRoute = ({ component: Component,  ...rest }) => (
        <Route {...rest} render={props => {     
            return (
                <Root>
                    <Component {...props}/>
                </Root>
            )
        }   
    }/>
);

export default PublicRoute;