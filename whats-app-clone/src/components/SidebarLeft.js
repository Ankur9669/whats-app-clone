import React from 'react'
import "../css/sidebarleft.css";
import SidebarLeftHeader from './SidebarLeftHeader';
import SidebarLeftMessage from './SidebarLeftMessage';

function SidebarLeft(props) 
{
      return (
        <div className = "sidebar-left">

            {/* Sidebarleftheader*/}
            <SidebarLeftHeader/>

            <div className = "sidebar-left-message-container">
                {
                props.roomList.map(room => 
                {
                    return (
                    <>
                        <SidebarLeftMessage roomName = {room.roomName}
                        roomId = {room._id}/>
                        <hr style = {{opacity:"0.1"}}/>
                    </>
                    )
                }) 
                }
            </div>
            
        </div>
    )
}

export default SidebarLeft
