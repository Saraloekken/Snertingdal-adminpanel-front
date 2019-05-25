import React, { Component } from 'react';
import '../../src/style.css';

export default class Historie extends Component {
    render()   {
        return ( 
            
            
            <div className="placeholder">
            
        <div className = "story"> 
               <h4>Ny hendelse:</h4>
            
                <div className="text-input">
                    <input type="text" name='name' className="friendsinput" placeholder="Hvilket år skjedde dette?"/>            
                </div>
            
            <div className ="history-info">
            
            <textarea placeholder="Hva skjedde dette året?">
        
            </textarea>
            
            </div>
            
    
                 <button type="button" className="addbutton"><i class="fas fa-plus"></i> Legg til</button> 
            
            </div>
            
            
        
            </div>
            
           
            
            
            
            
            
            
        )   
    }
}