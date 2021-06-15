import React from 'react'
import "../css/sidebarrightchat.css";
function SidebarRightChat(props) {
    return (
        
        <div className = "sidebar-right-chat">
            {console.log(props.messages)}
            {
                props.messages.map(message =>
                {
                    return (<div className = {message.received ? "chat-msg-received" : 
                    "chat-msg-sent"}>
                        <span className = "chat-sender-name">
                            <p>{message?.name}</p>
                        </span>
                        <span className = "chat-msg">
                            <p>{message?.message}</p>                
                        </span>
                        <span className = "chat-date-time">
                            <p>{message?.timestamp}</p>
                        </span>
                    </div>)
                })
            }
        </div>
    )
}

export default SidebarRightChat
