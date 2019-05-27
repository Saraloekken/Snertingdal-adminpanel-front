import React, { Component } from 'react';
import '../../src/style.css';

export default class Events extends Component {
    constructor(){
        super(); 
        this.state={
            headline:'',
            short_description:'',
            thumbnail:'',
            banner:'',
            dateday:'',
            from_time:'',
            to_time:'',
            place:'',
            long_description:'',
            holder_name:'',
            holder_info:'',
            link:'',
                
            status:null,
            nyevent:[]              
        }
    }

        
    insert = (data, thumbnail, banner) => {
        var form = new FormData();
        
        form.append('insert', data);
        form.append('thumbnail', thumbnail);
        form.append('banner', banner);
        
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/nyevent/nyevent-insert.php', {
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
    
    
    handleSelectFile = (event) => {
        this.setState({
            [event.target.name]:event.target.files[0],
        });
    }
        
    submit = () => {
        
        var thumbnail = this.state.thumbnail;
        var banner = this.state.banner;
    
        this.setState({thumbnail:'', banner:''});
        
        var data = JSON.stringify(this.state);
        
        this.insert(data, thumbnail, banner);
    }
    
        
  
    render()   {
        return ( 
            
            
            <div className="placeholder"> 
            
            
            <h4> Ny event: </h4>
            
             <div className="text-input">
                    <input type="text" name='headline' className="friendsinput" placeholder="Hva heter eventet?" onChange={this.handleChange.bind(this)}/>            
                </div>
            
            
 <div className ="history-info">
            <textarea name='short_description' placeholder="Kort om eventet" onChange={this.handleChange.bind(this)}>
            </textarea>
            
            </div>            
            
              <div className='file-input'>
                    <input type='file' name='thumbnail' onChange={this.handleSelectFile.bind(this)}/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Thumbnail</span>
                </div>
            
            
            
                    <div className='file-input'>
                    <input type='file' name='banner' onChange={this.handleSelectFile.bind(this)}/>
                    <span className='filebutton'>Velg</span>
                    <span className='label' data-js-label>Banner</span>
                </div>
            
            <div className="text-input">
        
                    <input type="date" name='dateday' className="date-input" placeholder="11/11/11" onChange={this.handleChange.bind(this)}/>            
                </div>
            
                <div className="text-input">
            <label htmlFor='from-time'>fra:</label>
                    <input type="time" name='from_time' className="time-input" placeholder="17:00" onChange={this.handleChange.bind(this)}/> 
                <label htmlFor='to-time'>til:</label>
                 <input type="time" name='to_time' className="time-input" placeholder="17:00" onChange={this.handleChange.bind(this)}/> 
                </div>
       
              <div className="text-input">
                    <input type="text" name='place' className="friendsinput" placeholder="Hvor skal eventet være?" onChange={this.handleChange.bind(this)}/>            
                </div>
            
               <div className ="history-info">
            <textarea name='long_description' placeholder="Hva vil du fortelle om eventet ditt?" onChange={this.handleChange.bind(this)}>
            </textarea>
            
            </div>
            
              <div className="text-input">
                    <input type="text" name='holder_name' className="friendsinput" placeholder="Hvem skal holde eventet?" onChange={this.handleChange.bind(this)}/>            
                </div>
            
               <div className ="history-info">
            <textarea name='holder_info'placeholder="Hva vil du fortelle om eventholder?" onChange={this.handleChange.bind(this)}>
            </textarea>
            </div>
            
               <div className="text-input">
                    <input type="text" name='link' className="friendsinput" placeholder="<link til billettssalg>" onChange={this.handleChange.bind(this)}/>            
                </div>
            <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-plus"></i> Legg til</button>           
            
            
            </div>
            
            
            
        )   
    }
}