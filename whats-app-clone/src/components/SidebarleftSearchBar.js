import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import "../css/sidebarleftsearchbar.css";
function SidebarleftSearchBar() {
    return (
        <div className = "sidebar-left-search-bar-container">
            <SearchIcon className = "sidebar-left-search-bar-icon"/>
            <textarea
            className = "sidebar-left-search-bar" 
            placeholder = "Search Or Start A New Chat"></textarea>
        </div>
    )
}

export default SidebarleftSearchBar
