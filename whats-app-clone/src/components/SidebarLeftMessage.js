import React from 'react';
import "../css/sidebarleftmessage.css";
import {useHistory} from "react-router-dom";
import {useState} from "react";

function SidebarLeftMessage() 
{
    const history = useHistory();
    const [width, setWidth] = useState(window.innerWidth);

    function handleClick()
    {
        if(width < 700)
        {
            history.push("/chat");
        }
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
                <p style = {{color: "white", fontWeight : "600"}}>Ankur gupta</p>
                <p style = {{color: "white", fontWeight : "400"}}>Yes i am online</p>
            </div>

            <div className = "sidebar-left-message-time">
                <p style = {{color: "white"}}>7:03PM</p>
            </div>
        </div>
    )
}

export default SidebarLeftMessage
