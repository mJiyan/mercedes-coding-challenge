import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { socketKeys } from '../../services/constants';


const useStatus = () => {
    const [updatedStatus, setUpdatedStatus] = useState(null); // Sent and received messages
    const socketRef = useRef();

    useEffect(() => {

        // Creates a WebSocket connection
        socketRef.current = socketIOClient(socketKeys.Server);

        // Listens for incoming messages
        socketRef.current.on(socketKeys.Event, (data) => {
            setUpdatedStatus(data);
        });
        // Destroys the socket reference
        // when the connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, []);


    return { updatedStatus };
};

export default useStatus;
