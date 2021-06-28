import './App.css';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loader from './components/Loader';

function App() {

  const [apploaded, setAppLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  //This will fetch all the previous messages.
  useEffect(() => 
  {
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
}
export default App;
