import React, {useState} from 'react'
import "../css/sidebarrightfooter.css";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import axios from "../axios";
import { useStateValue } from '../StateProvider';

function SidebarRightFooter() 
{
    const [message, setMessage] = useState("");
    const [state, dispatch] = useStateValue();
    function sendMessage()
    {
        //console.log(message);

        //If msg is empty dont send anything
        if(message.length > 0)
        {
            axios.post("/v3/messages/" + state?.roomId, {
                roomId: state?.roomId,
                message: message,
                name: "Ankur",
                timestamp: new Date().toUTCString(),
                received: false
            });

            //After sending the msg empty the msg og input field
            setMessage("");
        } 
    }

    //If enter button is pressed than send msg
    function handleKeyPress(e)
    {
        if(e.key === "Enter")
        {
            sendMessage();
        }
    }

    return (
        <div className = "sidebar-right-footer">
            <IconButton>
                <EmojiEmotionsOutlinedIcon className = "icons"/>
            </IconButton>
            
            <input
            className = "chat-bar" 
            placeholder = "Send chat"
            onChange = {(e) => setMessage(e.target.value)}
            onKeyPress = {handleKeyPress}
            value = {message}>
            </input>
            <IconButton onClick = {sendMessage}>
                <SendIcon className = "icons"/>
            </IconButton>  
        </div>
    )
}

export default SidebarRightFooter
