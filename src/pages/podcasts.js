import React, { Component } from 'react';
import '../../src/style.css';

export default class Podcasts extends Component {
    constructor(){
       super();
       this.state= {
           status:null,
           podcasts:[],
        }
   }

    insert = (data) => {
        var form = new FormData();
        
        form.append('insert', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/podcasts/podcasts-insert.php', {
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
    fetch('http://folk.ntnu.no/saralok/snertingdal/pages/podcasts/podcasts-getdata.php')
    .then((response) => response.json())
    .then((responseJson)=>{
            this.setState({
                podcasts: responseJson.podcasts
            });
       
        console.log(responseJson.podcasts);
        
    })
    .catch((error)=>{
        console.error(error);
        })
}    
    
    componentDidMount(){
        this.getData();
}    
    
    
    render()   {
        return ( 
            <div className="everything">
            
            <div className="placeholder">
            <h4>Ny podcast:</h4><br/>
            
            <h6>Overskrift:</h6>
            <input type="text" name='headline' className="friendsinput" placeholder="Overskrift" onChange={this.handleChange.bind(this)}/>

            <h6>Dato:</h6>
            <input type="date" name='dateday' className="friendsinput" placeholder="11/11/11" onChange={this.handleChange.bind(this)}/>
            
            <h6>Videolink:</h6>
            <input type="text" name='videolink' className="friendsinput" placeholder="Embed-link fra Youtube" onChange={this.handleChange.bind(this)}/>
            
            <h6>Kort om eventet:</h6>
            <textarea name='about'placeholder="Hva skjedde denne dagen?" onChange={this.handleChange.bind(this)}>
            </textarea>
            
            <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-plus"></i> Legg til</button>
          
            </div>
            
<div className="placeholder2">
    
 {this.state.podcasts.map(item => (
    <div key={item.id} className="element">
        
        
        <div className="element-left">
        
        <h5>{item.headline}</h5>
        <p className="overskrift">{item.dateday}</p>
        
        </div>
        

        <div className="element-right">
        <div className ="edit"><i className="fal fa-pencil"></i></div>
        <div className ="delete"><i className="fal fa-trash-alt"></i></div> 
        </div>
   
    </div>

    ))}
    
    
    
    
    
</div>

</div>
            
            
          
        )   
    }
}
