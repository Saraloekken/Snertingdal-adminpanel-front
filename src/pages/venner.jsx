import React, {Component} from 'react';
import '../../src/style.css';
import Authentication from '../components/authentication';

export default class Venner extends Component {
    constructor() {
        super();
        this.state = {
            headline: '',
            thumbnail: '',
            info: '',
            link:'',
            
            thumbnailText: 'Thumbnail',


            status: null,
            venner: [],
            messages: [],
        }
    }

    insert = (data, thumbnail) => {
        var form = new FormData();

        form.append('insert', data);
        form.append('thumbnail', thumbnail);


        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/venner/venner-insert.php', {
            method: 'POST',
            header: {},
            body: form,
        })

            .then(res => res.json())
            .then(response => {

                if (response.status === false) {   //nei

                   this.setState({
                        status: false,
                        messages: response.messages,
                    });
                }
                if (response.status === true) {   //ja

                    this.setState({
                        status: true,
                        messages: [],
                    });
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

        this.setState({thumbnail: ''});
        var data = JSON.stringify(this.state);
        this.insert(data, thumbnail);
    }


    render() {
        return (
            <div>
                <div className="everything">
                    <Authentication/>
                    <div className="placeholder">

                        <h4>Legg til ny venn:</h4><br/>
                        <div className="text-input">

                            <h6>Overskrift:</h6>
                            <input type="text" name='headline' className="friendsinput"
                                   placeholder="Hva heter vennen din?" 
                                   onChange={this.handleChange.bind(this)}/>

                            <h6>Profilbilde:</h6>
                            <div className='file-input'>
                                <input type='file' name='thumbnail' onChange={this.handleSelectFile.bind(this)}/>
                                <span className='filebutton'>Velg</span>
                                <span className='label'>{this.state.thumbnailText}</span>
                            </div>

                            

                            <h6>Info:</h6>
                            <input type="text" name='info' className="friendsinput"
                                   placeholder="Hva vil du fortelle om vennen din?"
                                   onChange={this.handleChange.bind(this)}/>

                           <input type="text" name='link' className="friendsinput"
                                   placeholder="Lim inn link til din venns side" 
                                   onChange={this.handleChange.bind(this)}/>


                            <div className='errormsg'>
                            {this.state.messages.map((message, i) => (
                                <p key={i}>{message}</p>
                            ))}
                            </div>
                            {this.state.status === true ? <div className="successmsg">OK!</div> : ''} 
                            
                            
                            <button type="button" className="addbutton" onClick={this.submit}><i
                                className="fas fa-sync-alt"></i> Oppdater
                            </button>

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

