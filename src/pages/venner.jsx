import React, { Component } from 'react';
import '../../src/style.css';

export default class Venner extends Component {
   constructor(){
       super();
       this.state= {
           headline:'',
           info:'',
           address:'',
           postalcode:'',
           place:'',
           homepage:'',
           phoneno:'',
           email:'',
           instagram:'',   
           facebook:'',
           
           
           
           status:null,
           venner:[],
        }
   }

    insert = (data) => {
        var form = new FormData();
        
        form.append('insert', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/venner/venner-insert.php', {
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
            <div>

            <div className="placeholder">
                
                <h4>Legg til ny venn:</h4><br/>
                <div className="text-input">
                    
                    <h6>Overskrift:</h6>
                    <input type="text" name='headline' className="friendsinput" placeholder="Hva heter vennen din?" value={this.state.headline} onChange={this.handleChange.bind(this)}/>            
                    
                    <h6>Info:</h6>    
                    <input type="text" name='info' className="friendsinput" placeholder="Hva vil du fortelle om vennen din?" value={this.state.info} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Gateaddresse:</h6>
                    <input type="text" name='address' className="friendsinput" placeholder="Hvor holder vennen din til?" value={this.state.address} onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Postnummer:</h6>
                    <input type="text" name='postalcode' className="friendsinput" placeholder="0000" value={this.state.postalcode} onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Sted</h6>
                    <input type="text" name='place' className="friendsinput" placeholder="Place" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Nettside:</h6>
                    <input type="text" name='homepage' className="friendsinput" placeholder="http://www.example.no" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Telefonnummer:</h6>
                    <input type="text" name='phoneno' className="friendsinput" placeholder="+47 00 00 00 00" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>E-post:</h6>
                    <input type="text" name='email' className="friendsinput" placeholder="example@gmail.com" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Instagram:</h6>
                    <input type="text" name='instagram' className="friendsinput" placeholder="Link til instagram" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Facebook:</h6>
                    <input type="text" name='facebook' className="friendsinput" placeholder="Link til facebook" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                  
                
                    <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-sync-alt"></i> Oppdater</button>     
                                    
                </div>
            
            </div>
            
            </div>
        )   
    }
}

