import React, {Component} from 'react';
import '../../src/style.css';
import Moment from 'react-moment';
import Authentication from '../components/authentication';

export default class Podcasts extends Component {
    constructor() {
        super();
        this.state = {
            dateday: '',
            videolink: '',
            about: '',
            headline: '',
            thumbnail: '',
            thumbnailText: 'Thumbnail',
            status: null,

            podcasts: [],
            messages: [],
        }
    }

    insert = (data, thumbnail) => {
        var form = new FormData();

        form.append('insert', data);
        form.append('thumbnail', thumbnail);

        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/podcasts/podcasts-insert.php', {
            method: 'POST',
            header: {},
            body: form,
        })

            .then(res => res.json())
            .then(response => {

                if (response.status === false) {   //nei

                    this.setState({status: false})

                    this.setState({
                        status: false,
                        messages: response.messages,
                    });

                }
                if (response.status === true) {   //ja

                    this.setState({status: true})

                    this.setState({
                        status: false,
                        messages: [],
                    });


                    this.getData();
                }

            })
    }

    handleChange = (podcasts) => {
        this.setState({[podcasts.target.name]: podcasts.target.value});
    }


    handleSelectFile = (podcasts) => {
        this.setState({
            [podcasts.target.name]: podcasts.target.files[0],
            thumbnailText: podcasts.target.files[0].name,

        });
    }


    submit = () => {
        var thumbnail = this.state.thumbnail;
        this.setState({thumbnail: ''});

        var data = JSON.stringify(this.state);
        this.insert(data, thumbnail);
    }

    getData() {
        fetch('http://folk.ntnu.no/saralok/snertingdal/pages/podcasts/podcasts-getdata.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    podcasts: responseJson.podcasts
                });

                console.log(responseJson.podcasts);

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
                    <h4>Ny podcast:</h4><br/>

                    <div className='file-input'>
                        <input type='file' name='thumbnail' onChange={this.handleSelectFile.bind(this)}/>
                        <span className='filebutton'>Velg</span>
                        <span className='label' data-js-label>{this.state.thumbnailText}</span>
                    </div>


                    <h6>Overskrift:</h6>
                    <input type="text" name='headline' className="friendsinput" placeholder="Overskrift"
                           onChange={this.handleChange.bind(this)}/>

                    <h6>Dato:</h6>
                    <input type="date" name='dateday' className="friendsinput" placeholder="11/11/11"
                           onChange={this.handleChange.bind(this)}/>

                    <h6>Videolink:</h6>
                    <input type="text" name='videolink' className="friendsinput" placeholder="Embed-link fra Youtube"
                           onChange={this.handleChange.bind(this)}/>


                    <h6>Kort om eventet:</h6>
                    <textarea name='about' placeholder="Hva skjedde denne dagen?"
                              onChange={this.handleChange.bind(this)}>
            </textarea>


                    <div className='errormsg'>
                        {this.state.messages.map((message, i) => (
                            <p key={i}>{message}</p>
                        ))}
                    </div>
                    {this.state.status === true ? <div className="successmsg">OK!</div> : ''}


                    <button type="button" className="addbutton" onClick={this.submit}><i
                        className="fas fa-plus"></i> Legg til
                    </button>

                </div>

                <div className="placeholder2">

                    {this.state.podcasts.map(item => (
                        <div key={item.id} className="element">


                            <div className="element-left">

                                <h5>{item.headline}</h5>
                                <p className="overskrift"><Moment date={item.dateday} format='DD/MM/YYYY'/></p>

                            </div>


                            <div className="element-right">
                                <div className="edit"><i className="fal fa-pencil"></i></div>
                                <div className="delete"><i className="fal fa-trash-alt"></i></div>
                            </div>

                        </div>

                    ))}


                </div>

            </div>

        )
    }
}
