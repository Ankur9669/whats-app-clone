import React from 'react'
import "../css/sidebarrightchat.css";
import {useEffect, useRef} from "react";

function SidebarRightChat(props) 
{
    //Ref for scrolling to bottom
    const messageRef = useRef();

    useEffect(() => {

        //Whenever new message would come the container would scroll to bottom
        if(messageRef)
        {
            //console.log(messageRef.current.scrollHeight);
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }     
    }, [props.messages]);

   
    return (
        <div className = "sidebar-right-chat" ref = {messageRef}>
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
