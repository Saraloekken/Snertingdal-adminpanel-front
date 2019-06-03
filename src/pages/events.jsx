import React, {Component} from 'react';
import '../../src/style.css';
import Authentication from '../components/authentication';

export default class Events extends Component {
    constructor() {
        super();
        this.state = {
            headline: '',
            subtitle: '',
            info: '',
            banner: '',
            bannerText: 'Bannerbilde',
            link: '',

            events: [],
            messages: [],
            status: null,
        }
    }


    insert = (data, banner) => {
        var form = new FormData();

        form.append('insert', data);
        form.append('banner', banner);


        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/events/mainevent-insert.php', {
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

                    console.log('error');
                }
                if (response.status === true) {   //ja

                    this.setState({
                        status: true,
                        messages: [],
                    });

                    console.log('success');
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
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/events/events-getdata.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    events: responseJson.events,
                });

            })
            .catch((error) => {
                console.error(error);
            });

        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/events/mainevent-getdata.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    headline: responseJson.mainevent[0].headline,
                    subtitle: responseJson.mainevent[0].subtitle,
                    info: responseJson.mainevent[0].info,
                    bannerText: responseJson.mainevent[0].banner,
                    link: responseJson.mainevent[0].link,
                });

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

            <div className="everything">
                <Authentication/>

                <div className="placeholder">

                    <h4>Hovedevent:</h4><br/>

                    <h6>Velg eventet fra listen:</h6>
                    <div className="text-input">

                        <select className="select" name='link' value={this.state.link}
                                onChange={this.handleChange.bind(this)}>
                            {this.state.events.map((item) => (
                                <option key={item.id} value={item.id}>{item.headline}</option>
                            ))}
                        </select>
                    </div>


                    <h6>Bilde:</h6>


                    <div className='file-input'>
                        <input type='file' name='banner' onChange={this.handleSelectFile.bind(this)}/>
                        <span className='filebutton'>Velg</span>
                        <span className='label' data-js-label>{this.state.bannerText}</span>
                    </div>


                    <h6>Overskrift:</h6>
                    <div className="text-input">
                        <input type="text" name='headline' className="friendsinput" placeholder="Overskrift"
                               value={this.state.headline} onChange={this.handleChange.bind(this)}/>
                    </div>

                    <h6>Undertittel</h6>
                    <div className="text-input">
                        <input type="text" name='subtitle' className="friendsinput" placeholder="Undertittel"
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
        )
    }
}