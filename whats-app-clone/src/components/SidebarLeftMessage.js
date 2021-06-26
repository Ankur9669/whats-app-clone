import React from 'react';
import "../css/sidebarleftmessage.css";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import { useStateValue } from '../StateProvider';

function SidebarLeftMessage(props) 
{
    const [state, dispatch] = useStateValue();
    const history = useHistory();
    const [width, setWidth] = useState(window.innerWidth);

    function handleClick()
    {
       // console.log(props.roomId);
        if(width < 700)
        {
           // console.log("YEs here");
            history.push("/chat");
        }
        dispatch({
            type: "SET_ROOM_ID",
            roomId: props.roomId,
        })
    }

    
    return (
        <div className = "sidebar-left-message" onClick = {handleClick}>
            <div className = "sidebar-left-message-img">
                <img
                    className = "sidebar-left-header-img" 
                    src = "https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg"
                    alt = "no-image">      
                </img>
            </div>
            <div className = "sidebar-left-message-msg">
                <p style = {{color: "white", fontWeight : "600"}}>{props.roomName}</p>
                <p style = {{color: "white", fontWeight : "400"}}>Tap to View messages</p>
            </div>

            <div className = "sidebar-left-message-time">
                <p style = {{color: "white"}}>7:03PM</p>
            </div>
        </div>
    )
}

export default SidebarLeftMessage
