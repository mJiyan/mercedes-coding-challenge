import React, { useEffect } from 'react';
import * as actions from "../../redux/actions/Account";
import { useDispatch } from "react-redux";
import { Redirect } from '../../components';

const RedirectPage = (props) => {
    const queryString = props.location.search;
    const dispatch = useDispatch();


    useEffect(() => {
        const redirect = async () => {
            let { success, error } = await dispatch(actions.redirect(queryString));
            if (!success) {
                console.log('An error occurred with', error.status, error.statusText, 'status');
                props.history.push('/login');
            }
            else
                props.history.push('/vehicles');
        };
        redirect();
    }, [dispatch, queryString, props.history]);



    return (
        <div className="App">
            <div className="outer">
                <div className="inner">
                    <div className="sm-box">
                        <Redirect />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default RedirectPage;