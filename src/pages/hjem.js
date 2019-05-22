import React, { Component } from 'react';
import '../../src/style.css';

export default class Hjem extends Component {
       constructor(){
       super();
       this.state= {
           headline:'',
           subtitle:'',
            phoneno:'',
           email:'',
           address:'',
           postalcode:'',
           place:'',
           
           status:null,
           hjem:[],
        }
   }

    insert = (data) => {
        var form = new FormData();
        
        form.append('insert', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/hjem/hjem-insert.php', {
        method: 'POST',  
        header: {},
        body: form,
        })

    .then(res => res.json())
    .then(response => {
            
            if(response.status === false){   //nei
            
                this.setState({status:false})
                
                console.log('error');
            }
            if(response.status === true){   //ja
                
                this.setState({status:true})
                
              console.log('success');
           }
          
        })
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
        
    
    
    submit = () => {
        var data = JSON.stringify(this.state);
        this.insert(data);
    }
    
    
    
    render()   {
        return ( 
            
            


    <div className="placeholder">
            
                      {
                this.state.status === true
                ?(
                    <h1>Success</h1>
                ) : (null)
            }
            {
                this.state.status === false
                ? (
                    <h1>Error</h1>
                ) : (null)
            }
            
            
            
            
            <div className = "banner"> 
               <h4>Banner:</h4>
            
                <div className='file-input'>
                    <input type='file'/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Bannerbilde</span>
                </div>
            
                <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Headline" onChange={this.handleChange.bind(this)}/>            
                    <input type="text" name='subtitle' className="friendsinput" placeholder="Subtitle" onChange={this.handleChange.bind(this)}/>
                </div>
            
                 <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-sync-alt"></i> Oppdater</button> 
            
            </div>
            
            
            <div className ="contact-info"><br/><br/>
            <h4>Kontaktinfo:</h4>
             <div className="text-input">
                    <input type="text" name='phoneno' className="friendsinput" placeholder="Phoneno" onChange={this.handleChange.bind(this)}/>            
                    <input type="text" name='email' className="friendsinput" placeholder="Email" onChange={this.handleChange.bind(this)}/>
                  <input type="text" name='address' className="friendsinput" placeholder="Address" onChange={this.handleChange.bind(this)}/>
             <input type="text" name='postalcode' className="friendsinput" placeholder="Postalcode" onChange={this.handleChange.bind(this)}/>
             <input type="text" name='place' className="friendsinput" placeholder="Place" onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
            
            <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-sync-alt"></i> Oppdater</button>
                   
            
            </div>
        )   
    }
}