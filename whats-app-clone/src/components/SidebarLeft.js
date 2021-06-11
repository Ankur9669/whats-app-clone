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

            {/* Sidebarleftsearchbar*/}
            <SidebarleftSearchBar/>
            <hr style = {{opacity:"0.1"}}/>

            {/* Sidebarleftmessages*/}
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
            <SidebarLeftMessage/>
            <hr style = {{opacity:"0.1"}}/>
        </div>
    )
}

export default SidebarLeft
