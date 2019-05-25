import React, { Component } from 'react';
import '../../src/style.css';

export default class Booking extends Component {
    render()   {
        return ( 

          <div className="placeholder">
            
            <h4> Galleri: </h4>
            
               <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Last opp nytt bilde</span>
                </div>
            
                       <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Alternativt navn"/>            
                </div>
            
              <button type="button" className="addbutton" ><i class="fas fa-plus"></i> Legg til</button>           
            
        
            
            </div>
            

        )   
    }
}