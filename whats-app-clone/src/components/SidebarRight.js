import React from 'react'
import "../css/sidebarright.css"
import SidebarRightChat from './SidebarRightChat'
import SidebarRightFooter from './SidebarRightFooter'
import SidebarRightHeader from './SidebarRightHeader'


function SidebarRight(props)
{
   
    return (
        <div className = "sidebar-right">

            {/* SidebarRight Header */}
            <SidebarRightHeader/>

            <SidebarRightChat/>

            <SidebarRightFooter/>
        </div>
    )
}

export default SidebarRight
