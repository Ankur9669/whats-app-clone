import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {useState, useEffect} from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "../css/loader.css";
function Loader() {
  return (
    <div className="App">
      <div className = "loader">
        <div className = "logo-wrapper">
            <WhatsAppIcon style = {{color: "gray", fontSize: "4rem"}}
            className = "whats-app-icon"/>
        </div>
        <div className = "loader-progress"></div>
        <p 
          style = {{color: "rgba(241, 241, 242, 0.88)", 
          fontWeight: "600", 
          fontSize: "1.2rem"}}>
              WhatsApp
        </p>
        <p className = "loader-msg">
            <p>
            <LockOpenIcon fontSize = "small" style = 
            {{marginRight: "7px", marginTop: "2px", fontSize: "18px"}}/>
            Not End to End Encrypted😂.
            </p>
            
            Made With Love ♥♥♥. By Ankur.
        </p>
      </div>
    </div>
  );
}

export default Loader;
