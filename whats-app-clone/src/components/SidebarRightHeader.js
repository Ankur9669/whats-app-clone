import React from 'react'
import "../css/sidebarrightheader.css";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function SidebarRightHeader() {
    return (
        <div className = "sidebar-right-header">
            <div className = "sidebar-right-header-img-container">
                <img
                className = "sidebar-right-header-img" 
                src = "https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/12/Casey2-150x150.jpg"
                alt = "no-image">      
                </img>
            </div>
            <div className = "sidebar-right-header-name-container">
                <p style = {{color: "white", fontWeight : "600"}}>Ankur gupta</p>
                <p style = {{color: "white", fontWeight : "400"}}>online</p>
            </div>

            <div className = "sidebar-right-header-icons-container">
                <IconButton>
                    <SearchIcon className = "icons"/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon className = "icons"/>
                </IconButton>

            </div>
        </div>
    )
}

export default SidebarRightHeader
