import React from 'react'
import "../css/sidebarleftheader.css";
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "../css/sidebarleftsearchbar.css";
import {useState} from "react";
function SidebarLeftHeader() 
{
    const [isOptionContainerOpen, setOptionContainerVisibility] = useState(false);
    function onClickMoreIcon()
    {
        setOptionContainerVisibility(!isOptionContainerOpen);
    }

    return (
        <div className = "sidebar-left-header-container">
        <div className = "sidebar-left-header">
            <div className = "sidebar-left-header-img-container">
                <img
                className = "sidebar-left-header-img" 
                src = "https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg"
                alt = "no-image">      
                </img>
            </div>

            <div className = "sidebar-left-header-icons-container">
                <IconButton>
                    <PhoneIcon className = "icons"/>
                </IconButton>

                <IconButton>
                    <MessageIcon className = "icons"/>
                </IconButton>

                <IconButton onClick = {onClickMoreIcon}>
                    <MoreVertIcon className = "icons"/>
                </IconButton>
                {isOptionContainerOpen && 
                    <div className = "options-container">
                        <ul className = "options">
                            <li className = "option">New Group</li>
                            <li className = "option">Profile</li>
                            <li className = "option">Settings</li>
                            <li className = "option">Log out</li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>
        <div className = "sidebar-left-search-bar-container">
            <SearchIcon className = "sidebar-left-search-bar-icon"/>
            <input
                className = "sidebar-left-search-bar" 
                placeholder = "Search Or Start A New Chat"> 
            </input>
        </div>
    </div>
    )
}

export default SidebarLeftHeader
