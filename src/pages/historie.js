import React, { Component } from 'react';
import '../../src/style.css';

export default class Histore extends Component {
   constructor(){
       super();
       this.state= {
           year:'',
           info:'',
           status:null,
           venner:[],
        }
   }

    insert = (data) => {
        var form = new FormData();
        
        form.append('insert', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/historie/historie-insert.php', {
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
        console.log('hei');
        var data = JSON.stringify(this.state);
        this.insert(data);
    }
    
    
    
    render()   {
        return ( 
            
            <div className="placeholder">
            
        <div className = "story"> 
               <h4>Ny hendelse:</h4>
            
                <div className="text-input">
                    <input type="text" name='year' className="friendsinput" placeholder="Hvilket år skjedde dette?" onChange={this.handleChange.bind(this)}/>            
                </div>
            
            <div className ="history-info">
            
            <textarea name='info' placeholder="Hva skjedde dette året?" onChange={this.handleChange.bind(this)}>
        
            </textarea>
            
            </div>
            
    
                 <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-plus"></i> Legg til</button> 
            
            </div>
            
            
        
            </div>
            
           
            
            
            
            
            
            
        )   
    }
}