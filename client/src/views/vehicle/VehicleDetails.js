import React, { useEffect } from 'react';
import * as actions from "../../redux/actions/Vehicle";
import { useDispatch, useSelector } from "react-redux";
import { DoorStatus } from '../../components/index'
import { Col, Container, Row, Badge, Table } from 'react-bootstrap';
import { ChevronLeft } from 'react-bootstrap-icons';
import { makeStyles, Card, CardContent } from '@material-ui/core/';
import { Link } from "react-router-dom";

const VehicleDetails = (props) => {
    const id = props.match.params.id;
    const vehicle = useSelector(state => state.VehicleReducer.vehicle);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadVehicle = async () => {
            let { success, error } = await dispatch(actions.getVehicleDetails(id));
            if (!success)
                console.log('An error occurred with', error.status, error.statusText, 'status');
        };
        loadVehicle();
    }, [dispatch, id]);

    const classes = useStyles();


    return (
            <div className="lg-box space">
                <p className="breadcrumbs"> <Link to={`/vehicles`} style={{ textDecoration: 'none' }} className="breadcrumbs"><ChevronLeft /> &nbsp; Go to the vehicle list </Link> </p>
                <h2><Badge variant="secondary">Vehicle Details</Badge></h2>

                <Container>
                    <Row>
                        <Col>

                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>Color Name</th>
                                        <th>Finorvin</th>
                                        <th>Fuel type</th>
                                        <th>License plate</th>
                                        <th>Model year</th>
                                        <th>Nickname</th>
                                        <th>Number of doors</th>
                                        <th>Number of seats</th>
                                        <th>Horsepower</th>
                                        <th>Sales Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vehicle.colorname}</td>
                                        <td>{vehicle.finorvin}</td>
                                        <td>{vehicle.fueltype}</td>
                                        <td>{vehicle.licenseplate}</td>
                                        <td>{vehicle.modelyear}</td>
                                        <td>{vehicle.nickname}</td>
                                        <td>{vehicle.numberofdoors}</td>
                                        <td>{vehicle.numberofseats}</td>
                                        <td>{vehicle.powerhp}</td>
                                        <td>{vehicle.salesdesignation}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Card className={classes.root}>
                                <CardContent>
                                    <DoorStatus id={id} />
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}


const useStyles = makeStyles({
    root: {
        backgroundColor: '#F5F5F5'
    }
});



export default VehicleDetails;