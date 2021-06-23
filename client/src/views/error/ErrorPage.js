import React, { useEffect, useState } from 'react';
import { Redirect } from '../../components';
import { ExclamationOctagon } from 'react-bootstrap-icons';

const ErrorPage = (props) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
            setTimeout(() => {
                props.history.push("/login");
            }, 2000);
        }, 2000);
    }, [props.history]);

    return (
        <div className="sm-box">
            {showText === false ?
                (

                    <div>
                        <br />
                                Oops...
                        <br />
                        <br />
                                Something went wrong, please contact the administrator.
                        <br />
                        <br />
                        <br />
                        <br />
                        <ExclamationOctagon size={80} />
                    </div>
                )
                :
                (
                    <Redirect />
                )
            }
        </div>
    )
}

export default ErrorPage;

