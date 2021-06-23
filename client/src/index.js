import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import MainLayout from './layout/MainLayout'
import { LoginPage, RedirectPage } from './views/index'
import PrivateRoute from './privateRoutes';

export const store = configureStore({});


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/auth" component={RedirectPage} />
        <PrivateRoute path="/" component={MainLayout}  />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);