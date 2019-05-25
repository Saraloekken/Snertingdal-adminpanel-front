import React, { Component } from 'react';
import '../../src/style.css';

export default class Events extends Component {
    render()   {
        return ( 
            
            
            <div className="placeholder">
            
            <h4> Ny event: </h4>
            
             <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Hva heter eventet?"/>            
                </div>
            
              <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Bannerbilde</span>
                </div>
            
            <div className="text-input">
                    <input type="date" name='headline' className="friendsinput" placeholder="11/11/11"/>            
                </div>
            
                <div className="text-input">
                    <input type="time" name='headline' className="friendsinput" placeholder="17:00"/>            
                </div>
       
              <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Hvor skal eventet være?"/>            
                </div>
            
               <div className ="history-info">
            <textarea placeholder="Hva vil du fortelle om eventet ditt?">
            </textarea>
            
            </div>
            
              <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Hvem skal holde eventet?"/>            
                </div>
            
               <div className ="history-info">
            <textarea placeholder="Hva vil du fortelle om eventholder?">
            </textarea>
            </div>
            
            <button type="button" className="addbutton" ><i class="fas fa-plus"></i> Legg til</button>           
            
            
            </div>
            
            
            
        )   
    }
}