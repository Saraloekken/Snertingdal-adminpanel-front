import React, {Component} from 'react';
import '../../src/style.css';
import Moment from 'react-moment';
import Authentication from '../components/authentication';


export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: '',
            short_description: '',
            thumbnail: '',
            banner: '',
            dateday: '',
            from_time: '',
            to_time: '',
            place: '',
            long_description: '',
            holder_name: '',
            holder_info: '',
            link: '',

            thumbnailText: 'Thumbnail',
            bannerText: 'Banner',
            status: null,
            messages: [],
            events: []
        }
    }


    insert(data, thumbnail, banner) {
        var form = new FormData();

        form.append('insert', data);
        form.append('thumbnail', thumbnail);
        form.append('banner', banner);

        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/events/events-insert.php', {
            method: 'POST',
            header: {},
            body: form,
        })
        .then(res => res.json())
        .then(response => {
            if (response.status === false) {   //nei
                this.setState({status: false});

                this.setState({
                    status: false,
                    messages: response.messages,
                });
                
                console.log('error');
            }

            if (response.status === true) {   //ja
                this.setState({status: true});
                
                this.setState({
                    status: false,
                    messages: [],
                });

                console.log('success');
            }

        })
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    handleSelectFile(event) {
        this.setState({
            [event.target.name]: event.target.files[0],
            [event.target.name + 'Text']: event.target.files[0].name,
        });
    }

    submit() {
        var thumbnail = this.state.thumbnail;
        var banner = this.state.banner;

        this.setState({thumbnail: '', banner: ''});

        var data = JSON.stringify(this.state);

        this.insert(data, thumbnail, banner);
    }
    
    
      getData(){
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/events/events-getdata.php')
        .then((response) => response.json())
        .then((responseJson)=>{
            this.setState({
                events: responseJson.events,
            });   
            console.log(responseJson.events);        
        })
    
        .catch((error)=>{
            console.error(error);
        })
    }
    
    componentDidMount(){
        this.getData();
    }


    render() {
        return (

            <div className="everything">
                <Authentication/>
                <div className="placeholder">
                    <h4> Ny event: </h4><br/>

                    <h6>Navn på event:</h6>
                    <div className="text-input">
                        <input type="text" name='headline' className="friendsinput" placeholder="Hva heter eventet?" value={this.state.headline} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Kort beskrivelse av eventet: </h6>
                    <div className="history-info">
                        <textarea name='short_description' placeholder="Kort om eventet" value={this.state.short_description} onChange={this.handleChange.bind(this)}/>
                    </div>

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


                    <h6>Dato for eventet:</h6>
                    <div className="text-input">
                        <input type="date" name='dateday' className="friendsinput" placeholder="11/11/11" value={this.state.dateday} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Tid for eventet (fra-til):</h6>
                    <div className="text-input">
                        <input type="time" name='from_time' className="friendsinput" placeholder="17:00" value={this.state.from_time} onChange={this.handleChange.bind(this)}/>
                        <input type="time" name='to_time' className="friendsinput" placeholder="17:00" value={this.state.to_date} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Sted:</h6>
                    <div className="text-input">
                        <input type="text" name='place' className="friendsinput" placeholder='Hvor skal eventet være?' value={this.state.place} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Lang beskrivelse av eventet:</h6>
                    <div className="history-info">
                        <textarea name='long_description' placeholder="Hva vil du fortelle om eventet ditt?" value={this.state.long_description} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Hvem holder eventet:</h6>
                    <div className="text-input">
                        <input type="text" name='holder_name' className="friendsinput" placeholder="Hvem skal holde eventet?" value={this.state.holder_name} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <h6>Om den som holder eventet:</h6>
                    <div className="history-info">
                        <textarea name='holder_info' placeholder="Hva vil du fortelle om eventholder?" value={this.state.holder_info} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Link til billettsalg:</h6>
                    <div className="text-input">
                        <input type="text" name='link' className="friendsinput" placeholder="<link til billettssalg>" value={this.state.link} onChange={this.handleChange.bind(this)}/>
                    </div>


                    <div className='errormsg'>
                        {this.state.messages.map((message, i) => (
                            <p key={i}>{message}</p>
                       ))}
                    </div>

                    <button type="button" className="addbutton" onClick={this.submit.bind(this)}><i className="fas fa-plus"/> Legg til</button>

                </div>

                <div className="placeholder2">
                   
                    
                    {this.state.events.map(item => (
                    <div key={item.id} className="element">
                    
                    
                        <div className="element-left">
                        <h5>{item.headline}</h5>
                        <p className="overskrift"><Moment date={item.dateday} format='DD/MM/YYYY'/></p>
                        <p className="undertittel">Kl.<Moment date={item.dateday + ' ' + item.from_time} format='HH:mm'/></p>
                            
                            </div>

                            <div className="element-right">
                            <div className="edit"><i className="fal fa-pencil"/></div>
                            <div className="delete"><i className="fal fa-trash-alt"/></div>
                        </div>
                    </div>
))}
                </div>

            </div>

        )
    }
}
