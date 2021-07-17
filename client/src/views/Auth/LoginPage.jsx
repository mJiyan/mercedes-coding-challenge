import React from 'react';
import * as actions from "../../redux/actions/Account";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import { Redirect } from '../../components';

const LoginPage = () => {
    const data = useSelector(state => state.AccountReducer.data);
    const dispatch = useDispatch();

    const login = async () => {
        let { success, error, url } = await dispatch(actions.login());
        if (!success)
            console.log('An error occurred with', error.status, error.statusText, 'status');
        else
            window.location.replace(url);
    }

    return (
        <>
            <div className="App">
                <div className="outer">
                    <div className="inner">
                        <div className="sm-box">
                            {data !== true ?
                                (<div>
                                    <h5>Login the system</h5>
                                    <Button onClick={login} className="btn-block" variant="dark"> Login &nbsp;<ChevronRight /> </Button>
                                </div>) :
                                (<div>
                                    <Redirect />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default LoginPage;