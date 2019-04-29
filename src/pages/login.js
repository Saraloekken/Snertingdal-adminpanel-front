import React, { Component } from 'react';

export default class Login extends Component {
    render()   {
        return ( 
            <div>
    
            <div className="loginbox">
                <i className="fas fa-user-cog"></i>
                    <div className="username">
                        <input type="text" className="input" placeholder="Brukernavn"/>
                        <i className="fa fa-user"></i>
                    </div>    
                    <div className="password">
                        <input type="password" className="input" placeholder="Passord"/>
                        <i className="fa fa-lock"></i>
                    </div>
            
                    <button type="button" className="button" >Logg inn</button>
            
            </div>
        
            
            </div>
        )
    }
}    
