import './App.css';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import {useEffect, useState} from "react";
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  //This will fetch all the previous messages.
  useEffect(() => 
  {
    axios.get("/v1/messages")
    .then((response) => 
    {
        if(response)
        {
          setMessages(response.data);
        }
        else{
          alert("Some Error in fetching");
        }
    })  
  }, [])

  //This would fetch the latest message
  useEffect(() => {

    //Pusher is for making mongodb realtime that is as soon as something would 
    //change it pusher would inform react about that.
    var pusher = new Pusher('4cee5d7aff5e3596cb6c', 
    {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', 
    function(message) 
    {
      setMessages([...messages, message]);
    });  
    
    return () => {
      pusher.unsubscribe();
      channel.unbind_all();
    }
  }, [messages]);


  return (
    <div className="app">
      
      {/* SidebarLeft component */}
      <SidebarLeft/>
      
      {/* SidebarRight component */}
      <SidebarRight messages = {messages}/>
    </div>
  );
}

export default App;
