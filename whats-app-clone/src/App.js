import './App.css';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loader from './components/Loader';
import axios from "./axios";

function App() {

  const [apploaded, setAppLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [roomList, setRoomList] = useState([]);

  //This will fetch all the previous messages.
  useEffect(() => 
  {
    //For fetching the list of rooms
    axios.get("/v3/roomList")
    .then((response) => {
        if(response)
        {
            //console.log(response.data);
            setRoomList(response.data);
        }
        else{
            console.log("Error in getting the list of rooms");
        }
    })
    //After the delay of 3 sec we would remove the loading screen
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000);


    window.addEventListener("resize", handleResize);
  }, [])


  //This is a function which is handling resizing of the screen
  function handleResize()
  {
    setWidth(window.innerWidth);
  }

  //In the starting it will show loading screen for 3 secs
  if(!apploaded)
  {
    return (<Loader></Loader>)
  }
  else{
    // if screen width is less than 700px the display like this
  return width > 700 ? 
  (
    <div className="app">
      
      {/* SidebarLeft component */}
      <SidebarLeft roomList = {roomList}/>
      
      {/* SidebarRight component */}
      <SidebarRight/>
    </div>
  ) :
  (
    <div className="app">
      <Router>
          <Switch>
            <Route path = "/chat">
                <SidebarRight/>    
            </Route>

            <Route path = "/">
              {/* SidebarLeft component */}
              <SidebarLeft roomList = {roomList}/>
            </Route>
          </Switch>     
      </Router>
    </div>
  )
  }
}
export default App;
