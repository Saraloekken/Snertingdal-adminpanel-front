import React, { Component } from 'react';
import '../../src/style.css';
import Authentication from '../components/authentication';

export default class Venner extends Component {
   constructor(){
       super();
       this.state= {
           headline:'',
           thumbnail:'',
           banner:'',
           info:'',
           address:'',
           postalcode:'',
           place:'',
           homepage:'',
           phoneno:'',
           email:'',
           instagram:'',   
           facebook:'',
           
            thumbnailText: 'Thumbnail',
            bannerText: 'Banner',
           
           status:null,
           venner:[],
        }
   }

    insert = (data,thumbnail,banner) => {
        var form = new FormData();
        
        form.append('insert', data);
        form.append('thumbnail', thumbnail);
        form.append('banner', banner);
        
        
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
        
    handleSelectFile(event) {
        this.setState({
            [event.target.name]: event.target.files[0],
            [event.target.name + 'Text']: event.target.files[0].name,
        });
    }
    
    
    submit = () => {
        
        var thumbnail = this.state.thumbnail;
        var banner = this.state.banner;

        this.setState({thumbnail: '', banner: ''});
        var data = JSON.stringify(this.state);
        this.insert(data, thumbnail, banner);
    }
    
    
    render()   {
        return ( 
            <div>
<div className="everything">
    <Authentication/>
            <div className="placeholder">
                
                <h4>Legg til ny venn:</h4><br/>
                <div className="text-input">
                    
                    <h6>Overskrift:</h6>
                    <input type="text" name='headline' className="friendsinput" placeholder="Hva heter vennen din?" value={this.state.headline} onChange={this.handleChange.bind(this)}/>     
                    
                    <h6>Profilbilde:</h6>
                    <div className='file-input'>
                    <input type='file' name='thumbnail' onChange={this.handleSelectFile.bind(this)}/>
                    <span className='filebutton'>Velg</span>
                    <span className='label'>{this.state.thumbnailText}</span>
                    </div>
                    
                    <h6>Bannerbilde:</h6>
                    <div className='file-input'>
                    <input type='file' name='banner' onChange={this.handleSelectFile.bind(this)}/>
                    <span className='filebutton'>Velg</span>
                    <span className='label'>{this.state.bannerText}</span>
                    </div>
                    
                    <h6>Info:</h6>    
                    <input type="text" name='info' className="friendsinput" placeholder="Hva vil du fortelle om vennen din?"  onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Gateaddresse:</h6>
                    <input type="text" name='address' className="friendsinput" placeholder="Hvor holder vennen din til?"  onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Postnummer:</h6>
                    <input type="text" name='postalcode' className="friendsinput" placeholder="0000"  onChange={this.handleChange.bind(this)}/>
                        
                    <h6>Sted</h6>
                    <input type="text" name='place' className="friendsinput" placeholder="Place"  onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Nettside:</h6>
                    <input type="text" name='homepage' className="friendsinput" placeholder="http://www.example.no"  onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Telefonnummer:</h6>
                    <input type="text" name='phoneno' className="friendsinput" placeholder="+47 00 00 00 00"  onChange={this.handleChange.bind(this)}/>
                    
                    <h6>E-post:</h6>
                    <input type="text" name='email' className="friendsinput" placeholder="example@gmail.com" onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Instagram:</h6>
                    <input type="text" name='instagram' className="friendsinput" placeholder="Link til instagram"  onChange={this.handleChange.bind(this)}/>
                    
                    <h6>Facebook:</h6>
                    <input type="text" name='facebook' className="friendsinput" placeholder="Link til facebook"  onChange={this.handleChange.bind(this)}/>
                  
                
                    <button type="button" className="addbutton" onClick={this.submit}><i className="fas fa-sync-alt"></i> Oppdater</button>     
                                    
                </div>
                
            </div>
            
                <div className="placeholder2">
                
                <div className="element"></div>
                
                
                </div>
                
                </div>
            </div>
        )   
    }
}

