import React from 'react';
import "../css/sidebarleftmessage.css";
function SidebarLeftMessage() {
    return (
        <div className = "sidebar-left-message">
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
