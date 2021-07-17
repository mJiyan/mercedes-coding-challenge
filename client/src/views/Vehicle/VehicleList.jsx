import React, { useEffect } from 'react';
import * as actions from "../../redux/actions/Vehicle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table, Badge } from 'react-bootstrap';


const VehicleList = (props) => {

    const vehicles = useSelector(state => state.VehicleReducer.vehicles);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadVehicles = async () => {
            let { success, error } = await dispatch(actions.getVehicles());
            if (!success)
                console.log('An error occurred with', error);
        };
        loadVehicles();
    }, [dispatch]);


    return (
        <>
            <div className="lg-box">
                <h2><Badge variant="secondary">Vehicles List</Badge></h2>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Finorvin</th>
                            <th>License plate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles?.map((item, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.finorvin}</td>
                                <td>{item.licenseplate}</td>
                                <td><Link to={`/vehicles/${item.id}`}><Button variant="info">Get the vehicle details</Button></Link> {' '}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}



export default VehicleList;