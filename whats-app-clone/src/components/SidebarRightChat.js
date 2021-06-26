import React from 'react'
import "../css/sidebarrightchat.css";
import {useEffect, useRef, useState} from "react";
import { useStateValue } from '../StateProvider';
import Pusher from 'pusher-js';
import axios from "../axios";
function SidebarRightChat(props) 
{
    //Ref for scrolling to bottom
    const messageRef = useRef();

    const [messages, setMessages] = useState([]);
    const [state, dispatch] = useStateValue();

    //60d482e49caa933cb0c6dcf8
    useEffect(() => {
        //console.log(state.roomId.length);
        if(state.roomId.length > 1)
        {
            
            axios.get("/v3/messages/" + state.roomId)
            .then((response) => 
            {
                //console.log(axios.get("/v3/messages/" + state.roomId));
                if(response)
                {
                    setMessages(response.data);
                }
                else{
                    alert("Some Error in fetching");
                }
            });
        }
        
    }, [state.roomId]);

    useEffect(() => {

        //Whenever new message would come the container would scroll to bottom
        if(messageRef)
        {
            //console.log(messageRef.current.scrollHeight);
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }     

        //Pusher is for making mongodb realtime that is as soon as something would 
        //change it pusher would inform react about that.
        var pusher = new Pusher('4cee5d7aff5e3596cb6c', 
        {
            cluster: 'ap2'
        });

        var channel = pusher.subscribe('rooms');
        channel.bind('inserted', 
        function(message) 
        {
            //console.log(message);
            if(message.roomId === state.roomId)
            {
                setMessages([...messages, message]);
            }
        });  
    
        return () => {
            pusher.unsubscribe();
            channel.unbind_all();
        }
    }, [messages]);

   
    return (
        <div className = "sidebar-right-chat" ref = {messageRef}>
            {
                messages.map(message =>
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
