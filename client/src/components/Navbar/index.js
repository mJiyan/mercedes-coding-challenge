import React from 'react';
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/Account";
import { Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ArrowBarRight } from 'react-bootstrap-icons';
import logo from '../../assets/images/mercedes-logo.png';
import { history } from "../../configureStore";
import storage from "../../services/storage";


const Navbar = () => {
    const dispatch = useDispatch();


    const logout = async () => {
        let { success, error } = await dispatch(actions.logout());
        if (!success)
            console.log('An error occurred with', error.status, error.statusText, 'status');
        else
            history.push("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <span className="navbar-brand">
                        <Link to={`/vehicles`} style={{ textDecoration: 'none', color: 'black' }}><Image width={30} src={logo} roundedCircle /> &nbsp;<span className="logo-text">Mercedes-Benz /developer</span> </Link>

                    </span>
                    {storage.getAuth().token
                        ? (
                            <div className="logout-button" >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Button onClick={logout} variant="dark"> Logout <ArrowBarRight /></Button>
                                    </li>
                                </ul>
                            </div>
                        )
                        : (<span></span>)}

                </div>
            </nav>

        </>
    )
}

export default Navbar;