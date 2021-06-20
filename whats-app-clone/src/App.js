import './App.css';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import {useEffect, useState} from "react";
import Pusher from 'pusher-js';
import axios from "./axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  const [messages, setMessages] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

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
    });
    
    window.addEventListener("resize", handleResize);
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

  //This is a function which is handling resizing of the screen
  function handleResize()
  {
    setWidth(window.innerWidth);
  }

 // if screen width is less than 700px the display like this
  return width > 700 ? 
  (
    <div className="app">
      
      {/* SidebarLeft component */}
      <SidebarLeft/>
      
      {/* SidebarRight component */}
      <SidebarRight messages = {messages}/>
    </div>
  ) :
  (
    <div className="app">
      
      <Router>
          <Switch>
            <Route path = "/chat">
                <SidebarRight messages = {messages}/>    
            </Route>

              <Route path = "/">
                {/* SidebarLeft component */}
                <SidebarLeft/>
              </Route>
          </Switch>
        
      
      </Router>
    </div>
  )
}

export default App;
