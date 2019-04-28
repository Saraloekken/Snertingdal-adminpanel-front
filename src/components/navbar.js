import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        
    <div className = "navbar">
        <ul>
            <i className="far fa-users-cog"></i>
            <li><a href="home.jsx"><i className="fas fa-home"></i> Hjem</a></li>
            <li><a href="events.jsx"><i className="fas fa-calendar-week"></i> Events</a></li>
            <li><a href="history.jsx"><i className="fas fa-history"></i> Historie</a></li>
            <li><a href="booking.jsx"><i className="fas fa-bookmark"></i> Booking</a></li>
            <li><a href="history.jsx"><i className="fas fa-address-book"></i> Kontakt oss</a></li>
            <li><a href="booking.jsx"><i className="fas fa-user-friends"></i> Våre venner</a></li>
        </ul>    
    </div>    
        
    );
  }
}

export default Navbar;
