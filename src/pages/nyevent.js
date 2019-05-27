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
                    <span className='label' data-js-label>Thumbnail</span>
                </div>
            
                    <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Banner</span>
                </div>
            
            <div className="text-input">
                    <input type="date" name='date' className="date-input" placeholder="11/11/11"/>            
                </div>
            
                <div className="text-input">
                    <input type="time" name='time' className="time-input" placeholder="17:00"/>            
                </div>
       
              <div className="text-input">
                    <input type="text" name='place' className="friendsinput" placeholder="Hvor skal eventet være?"/>            
                </div>
            
               <div className ="history-info">
            <textarea name='description' placeholder="Hva vil du fortelle om eventet ditt?">
            </textarea>
            
            </div>
            
              <div className="text-input">
                    <input type="text" name='eventholder' className="friendsinput" placeholder="Hvem skal holde eventet?"/>            
                </div>
            
               <div className ="history-info">
            <textarea name='aboutevent'placeholder="Hva vil du fortelle om eventholder?">
            </textarea>
            </div>
            
               <div className="text-input">
                    <input type="text" name='eventholder' className="friendsinput" placeholder="<link til billettssalg>"/>            
                </div>
            <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-plus"></i> Legg til</button>           
            
            
            </div>
            
            
            
        )   
    }
}