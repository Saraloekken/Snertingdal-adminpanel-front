import React, { Component } from 'react';
import '../../src/style.css';

export default class Hjem extends Component {
    render()   {
        return ( 
            

    <div className="placeholder">
            
            <div className = "banner"> 
               <h4>Banner:</h4>
            
                <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Bannerbilde</span>
                </div>
            
                <div className="text-input">
                    <input type="text" name='name' className="friendsinput" value="<?php echo $row['headline'];?>"/>            
                    <input type="text" name='name' className="friendsinput" value="<?php echo $row['subtitle'];?>"/>
                </div>
            
                 <button type="button" className="addbutton"><i className="fas fa-sync-alt"></i> Oppdater</button> 
            
            </div>
            
            
            <div className ="contact-info"><br/><br/>
            <h4>Kontaktinfo:</h4>
             <div className="text-input">
                    <input type="text" name='name' className="friendsinput" value="<?php echo $row['phoneno'];?>"/>            
                    <input type="text" name='name' className="friendsinput" value="<?php echo $row['email'];?>"/>
                  <input type="text" name='name' className="friendsinput" value="<?php echo $row['address'];?>"/>
             <input type="text" name='name' className="friendsinput" value="<?php echo $row['postalcode'];?>"/>
             <input type="text" name='name' className="friendsinput" value="<?php echo $row['place'];?>"/>
                </div>
            </div>
            
            <button type="button" className="addbutton"><i className="fas fa-sync-alt"></i> Oppdater</button>
                   
            
            </div>
        )   
    }
}