import React, {useState} from 'react'
import "../css/sidebarrightfooter.css";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import axios from "../axios";
import { useStateValue } from '../StateProvider';
import Picker from 'emoji-picker-react';
import CloseIcon from '@material-ui/icons/Close';
function SidebarRightFooter() 
{
    const [message, setMessage] = useState("");
    const [state, dispatch] = useStateValue();
    const [emojiPicker, setEmojiPicker] = useState(false);

    function sendMessage()
    {
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
            setEmojiPicker(false);
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

    //When user selects the emoji we append it to the message
    const onEmojiClick = (event, emojiObject) =>
    {
        setMessage(message + emojiObject.emoji);
    };

    return (
        <>
        {/*We only show emojipicker container when user clicks emojiicon*/}
        {emojiPicker && 
        <div className = "emoji-picker-container">
            <CloseIcon style = {{color: "white", cursor: "pointer"}}
            fontSize = "large"
            onClick = {() => setEmojiPicker(!emojiPicker)}>

            </CloseIcon>

            <Picker onEmojiClick = {onEmojiClick}></Picker>
        </div>
        } 
        <div className = "sidebar-right-footer">
            <IconButton onClick = {() => setEmojiPicker(!emojiPicker)}>
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
        </>
    )
}

export default SidebarRightFooter
