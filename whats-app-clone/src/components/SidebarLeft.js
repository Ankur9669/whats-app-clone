import React from 'react'
import "../css/sidebarleft.css";
import SidebarLeftHeader from './SidebarLeftHeader';
import SidebarLeftMessage from './SidebarLeftMessage';
import {useEffect, useState} from "react";
import axios from "../axios";

function SidebarLeft() 
{
    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
        
        //For fetching the list of rooms
        axios.get("/v3/roomList")
        .then((response) => {
            if(response)
            {
                //console.log(response.data);
                setRoomList(response.data);
            }
            else{
                console.log("Error in getting the list of rooms");
            }
        })
    }, []);

      return (
        <div className = "sidebar-left">

            {/* Sidebarleftheader*/}
            <SidebarLeftHeader/>

            <div className = "sidebar-left-message-container">
                {
                roomList.map(room => 
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
