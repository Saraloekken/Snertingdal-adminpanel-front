import React, {Component} from 'react';
import '../../src/style.css';
import Authentication from '../components/authentication';

export default class Hjem extends Component {
    constructor() {
        super();
        this.state = {
            headline: '',
            subtitle: '',
            banner: '',
            bannerText: 'Bannerbilde',

            status: null,
            hjem: [],
            messages: [],
        }
    }

    insert = (data, banner) => {
        var form = new FormData();

        form.append('insert', data);
        form.append('banner', banner);

        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/hjem/hjem-insert.php', {
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

    handleSelectFile = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0],
            bannerText: event.target.files[0].name,
        });
    }

    submit = () => {
        var banner = this.state.banner;
        this.setState({banner: ''});

        var data = JSON.stringify(this.state);
        this.insert(data, banner);
    }


    getData() {
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/hjem/hjem-getdata.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    headline: responseJson.hjem[0].headline,
                    subtitle: responseJson.hjem[0].subtitle,
                    bannerText: responseJson.hjem[0].banner
                });
                console.log(responseJson.hjem);
            })

            .catch((error) => {
                console.error(error);
            })
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        return (


            <div className="Everything">
                <Authentication/>
                <div className="placeholder">

                    <div className="banner">
                        <h4>Forside:</h4><br/>


                        <h6>Forsidebilde:</h6>
                        <div className='file-input'>
                            <input type='file' name='banner' onChange={this.handleSelectFile.bind(this)}/>
                            <span className='filebutton'>Velg</span>
                            <span className='label' data-js-label>{this.state.bannerText}</span>
                        </div>


                        <div className="text-input">
                            <h6>Overskrift:</h6>
                            <input type="text" name='headline' className="friendsinput" placeholder="Headline"
                                   value={this.state.headline} onChange={this.handleChange.bind(this)}/>

                            <h6>Undertittel:</h6>
                            <input type="text" name='subtitle' className="friendsinput" placeholder="Subtitle"
                                   value={this.state.subtitle} onChange={this.handleChange.bind(this)}/>
                        </div>


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
            </div>
        )
    }
}

/**
 * Find the postalCode position in the list, and returns the name of the city if it is there.
 * @param {string} postalCode - Postal Code from inputfield.
 * @return {Promise} - Promise object representing the city name.
 */