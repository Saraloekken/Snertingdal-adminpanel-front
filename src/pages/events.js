import React, { Component } from 'react';
import '../../src/style.css';

export default class Events extends Component {
    render()   {
        return ( 
            
            
            <div className="placeholder">
        
            <h4>Hovedevent:</h4><br/>  
             
          
            <h6>Bilde:</h6>
            <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Banner</span>
                </div>
            
      
            <h6>Overskrift:</h6>
            <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Overskrift"/>            
                </div>
            
        <h6>Undertittel</h6>
            <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Undertittel"/>            
                </div>
            
           
            <h6>Velg eventet fra listen:</h6>
            <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="<lim inn link til event her>"/>            
                </div>
            
            
             <button type="button" className="addbutton"><i className="fas fa-sync-alt"></i> Oppdater</button>
            
           </div>
            
        )   
    }
}