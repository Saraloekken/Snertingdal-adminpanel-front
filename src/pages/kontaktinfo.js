import React, { Component } from 'react';
import '../../src/style.css';

export default class Kontakt extends Component {
    constructor(){
       super();
       this.state= {
            phoneno:'',
            email:'',
            address:'',
            postalcode:'',
            place:'',
    
    
           status:null,
           kontaktinfo:[],
        }
   }
    
     insert = (data) => {
        var form = new FormData();
        
        form.append('insert', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/kontaktinfo/kontaktinfo-insert.php', {
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
    
    
    getData(){
    fetch('http://folk.ntnu.no/saralok/snertingdal/pages/kontaktinfo/kontaktinfo-getdata.php')
    .then((response) => response.json())
    .then((responseJson)=>{
            this.setState({
                phoneno: responseJson.kontaktinfo[0].phoneno,
                email: responseJson.kontaktinfo[0].email,
                address: responseJson.kontaktinfo[0].address,
                postalcode: responseJson.kontaktinfo[0].postalcode,
                place: responseJson.kontaktinfo[0].place,
            });
       
        console.log(responseJson.hjem);
        
    })
    .catch((error)=>{
        console.error(error);
        })
}    
    
    componentDidMount(){
        this.getData();
}    
        

    
render(){
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
            
            <h4>Kontaktinfo:</h4><br/>
                <div className="text-input">
                    
                    <h6>Telefonnummer:</h6>
                    <input type="text" name='phoneno' className="friendsinput" placeholder="Phoneno" value={this.state.phoneno} onChange={this.handleChange.bind(this)}/>            
                    
                    <h6>E-post:</h6>    
                    <input type="text" name='email' className="friendsinput" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Gateaddresse:</h6>
                    <input type="text" name='address' className="friendsinput" placeholder="Address" value={this.state.address} onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Postnummer:</h6>
                    <input type="text" name='postalcode' className="friendsinput" placeholder="Postalcode" value={this.state.postalcode} onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Sted</h6>
                    <input type="text" name='place' className="friendsinput" placeholder="Place" value={this.state.place} onChange={this.handleChange.bind(this)}/>
                
                     <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-sync-alt"></i> Oppdater</button>     
                        
                    </div>
            
          </div>
        )   
    }
}