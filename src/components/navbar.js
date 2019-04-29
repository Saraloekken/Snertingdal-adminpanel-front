import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        
    <div className = "navbar">
        <ul>
            <i className="fal fa-users-cog"></i>
            <li><a href="hjem.js"><i className="fas fa-home"></i> Hjem</a></li>
            <li><a href="events.js"><i className="fas fa-calendar-week"></i> Events</a></li>
            <li><a href="historie.js"><i className="fas fa-history"></i> Historie</a></li>
            <li><a href="booking.js"><i className="fas fa-bookmark"></i> Booking</a></li>
            <li><a href="kontakt.js"><i className="fas fa-address-book"></i> Kontakt oss</a></li>
            <li><a href="venner.js"><i className="fas fa-user-friends"></i> Våre venner</a></li>
            <li><a href="logout.js"><i class="fas fa-sign-out-alt"></i> Logg ut</a></li>
        </ul>    
    </div>    
        
    );
  }
}

export default Navbar;
