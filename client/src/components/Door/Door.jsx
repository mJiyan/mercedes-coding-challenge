import React, { useEffect, useState } from 'react';
import * as actions from "../../redux/actions/Door";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Switch } from '@material-ui/core';
import { Lock, Unlock } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import useStatus from './useStatus';


const DoorStatus = (props) => {
    const [lockState, setLockState] = useState(true);
    const dispatch = useDispatch();
    const initialDoorStatus = useSelector(state => state.DoorReducer.doorStatus);
    const id = props.id;

    let { updatedStatus } = useStatus();
    let doorLockStatus = initialDoorStatus?.doorlockstatusvehicle?.value;
    let isLocked = doorLockStatus === "LOCKED" ? true : false;


    useEffect(() => {
        const loadDoorStatus = async () => {
            let { success, error } = await dispatch(actions.getVehicleDoorStatus(id));
            if (!success)
                console.log('An error occurred with', error.status, error.statusText, 'status');
            else
                setLockState(isLocked);

        };
        loadDoorStatus();
    }, [dispatch, id, isLocked]);


    const lockUnlock = async () => {

        const body = {
            "command": (updatedStatus !== null ? (updatedStatus?.data?.doorlockstatusvehicle?.value === 'LOCKED' ? true : false) : lockState) === true ? "UNLOCK" : "LOCK"
        }

        let { success, error } = await dispatch(actions.updateVehicleDoorStatus(id, body));
        if (!success)
            console.log('An error occurred with', error.status, error.statusText, 'status');
        else
            setLockState(isLocked);
    }


    return (
        <div>
            <List>
                <h4>Door Status</h4>
                <Container>
                    <Row>
                        <Col>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                       {updatedStatus !== null ? (updatedStatus?.data?.doorstatusfrontleft?.value === "OPEN" ? <Unlock /> : <Lock />) : (initialDoorStatus?.doorstatusfrontleft?.value === "OPEN" ? <Unlock /> : <Lock />)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Front Left Door:" secondary={updatedStatus !== null ? (updatedStatus?.data?.doorstatusfrontleft?.value) : (initialDoorStatus?.doorstatusfrontleft?.value)} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {updatedStatus !== null ? (updatedStatus?.data?.doorstatusrearleft?.value === "OPEN" ? <Unlock /> : <Lock />) : (initialDoorStatus?.doorstatusrearleft?.value === "OPEN" ? <Unlock /> : <Lock />)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Rear Left Door:" secondary={updatedStatus !== null ? (updatedStatus?.data?.doorstatusrearleft?.value) : (initialDoorStatus?.doorstatusrearleft?.value)} />
                            </ListItem>
                        </Col>
                        <Col>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {updatedStatus !== null ? (updatedStatus?.data?.doorstatusfrontright?.value === "OPEN" ? <Unlock /> : <Lock />) : (initialDoorStatus?.doorstatusfrontright?.value === "OPEN" ? <Unlock /> : <Lock />)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Front Right Door:" secondary={updatedStatus !== null ? (updatedStatus?.data?.doorstatusfrontright?.value) : (initialDoorStatus?.doorstatusfrontright?.value)} />
                            </ListItem>

                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {updatedStatus !== null ? (updatedStatus?.data?.doorstatusrearright?.value === "OPEN" ? <Unlock /> : <Lock />) : (initialDoorStatus?.doorstatusrearright?.value === "OPEN" ? <Unlock /> : <Lock />)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Rear Right Door:" secondary={updatedStatus !== null ? (updatedStatus?.data?.doorstatusrearright?.value) : (initialDoorStatus?.doorstatusrearright?.value)} />
                            </ListItem>

                        </Col>
                    </Row>
                </Container>
                <Divider variant="inset" component="li" />

            </List>
            <h4>{(updatedStatus !== null ? (updatedStatus?.data?.doorlockstatusvehicle?.value === 'LOCKED' ? true : false) : lockState) === true ? 'Unlock the doors: ' : 'Lock the doors: '}
                <Switch
                    checked={updatedStatus !== null ? (updatedStatus?.data?.doorlockstatusvehicle?.value === 'LOCKED' ? true : false) : lockState}
                    onClick={lockUnlock}
                    name="isDoorLocked"
                    color="default"
                />
            </h4>
        </div>

    )
}

export default DoorStatus;