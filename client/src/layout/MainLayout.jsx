import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from '../components';
import { routes } from '../routes'
import classNames from "classnames";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className={classNames("App")}>
                <div className="outer">
                    <div className="inner">
                        <Switch>
                            {routes.map((prop, key) => (
                                <Route
                                    exact
                                    path={prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout;