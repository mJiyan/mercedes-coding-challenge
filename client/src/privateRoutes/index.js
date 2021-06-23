import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from "../services/storage";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (
            storage.getAuth().token
                ? <Component {...props}/>
                : <Redirect to="/login" state={{from: props.location}}/>
        )}
    />
);

export default PrivateRoute;