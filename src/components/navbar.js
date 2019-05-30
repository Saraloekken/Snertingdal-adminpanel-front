import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        
    <div className = "navbar">
       <i className="fal fa-users-cog"></i>
        <ul>
            <li><NavLink exact to ="/hjem" activeClassName = "activeStyle"><i className="fas fa-home"></i> Hjem</NavLink></li>
            
            <li><NavLink exact to ="/kontaktinfo" activeClassName = "activeStyle" className="underbar"> - Kontaktinfo</NavLink></li>        
            
            <li><NavLink exact to ="/events" activeClassName = "activeStyle"><i className="fas fa-calendar-week"></i> Events</NavLink></li>
            
            <li><NavLink exact to ="/nyevent" activeClassName = "activeStyle" className="underbar"> - Ny event</NavLink></li>
            
            <li><NavLink exact to ="/podcasts" activeClassName = "activeStyle" className="underbar"> - Podcasts</NavLink></li>
            
            <li><NavLink exact to ="/historie" activeClassName = "activeStyle"><i className="fas fa-history"></i> Historie</NavLink></li>     
            
            <li><NavLink exact to ="/booking" activeClassName = "activeStyle" className="underbar">- Galleri</NavLink></li>
            
            <li><NavLink exact to ="/venner" activeClassName = "activeStyle"><i className="fas fa-user-friends"></i> Våre venner</NavLink></li>
            
            <li><NavLink exact to ="/login" activeClassName = "activeStyle"><i className="fas fa-sign-out-alt"></i> Logg ut</NavLink></li>
        </ul>    
    </div>    
        
        
        
    );
  }
}

export default Navbar;
