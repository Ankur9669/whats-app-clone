import React from 'react'
import "../css/sidebarleft.css";
import SidebarLeftHeader from './SidebarLeftHeader';
import SidebarLeftMessage from './SidebarLeftMessage';
import SidebarleftSearchBar from './SidebarleftSearchBar';
function SidebarLeft() {
    return (
        <div className = "sidebar-left">

            {/* Sidebarleftheader*/}
            <SidebarLeftHeader/>

            <div className = "sidebar-left-message-container">
                {/* Sidebarleftmessages*/}
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            </div>
            
        </div>
    )
}

export default SidebarLeft
