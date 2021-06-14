import React from 'react'
import "../css/sidebarrightfooter.css";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
function SidebarRightFooter() {
    return (
        <div className = "sidebar-right-footer">
            <IconButton>
                <EmojiEmotionsOutlinedIcon className = "icons"/>
            </IconButton>
            
            <input
            className = "chat-bar" 
            placeholder = "Send chat"></input>
            <IconButton>
                <SendIcon className = "icons"/>
            </IconButton>
            
        </div>
    )
}

export default SidebarRightFooter
