import React, {Component} from 'react';
import '../../src/style.css';
import Authentication from '../components/authentication';

export default class Histore extends Component {
    constructor() {
        super();
        this.state = {
            headline: '',
            subtitle: '',
            yearFrom: '',
            yearTo: '',
            info: '',

            status: null,
            historie: [],
            messages: [],
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


                    this.getData();
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


    getData() {
        fetch(
            "http://folk.ntnu.no/saralok/snertingdal/pages/historie/historie-getdata.php"
        )
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    historie: responseJson.historie
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        return (

            <div className="everything">
                <Authentication/>
                <div className="placeholder">


                    <div className="story">
                        <h4>Ny hendelse:</h4><br/>

                        <h6>Overskrift:</h6>

                        <div className="text-input">
                            <input type="text" name='headline' className="friendsinput" placeholder="Overskrift"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>


                        <h6>Undertittel:</h6>
                        <div className="text-input">
                            <input type="text" name='subtitle' className="friendsinput" placeholder="Undertittel"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>


                        <h6>Årstall (fra-til):</h6>
                        <div className="text-input">
                            <input type="year" name='yearFrom' className="friendsinput" placeholder="Fra"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>

                        <div className="text-input">
                            <input type="text" name='yearTo' className="friendsinput" placeholder="Til"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>

                        <h6>Hendelse:</h6>
                        <div className="history-info">
            
            <textarea name='info' placeholder="Hva skjedde dette året?" onChange={this.handleChange.bind(this)}>
        
            </textarea>

                        </div>


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


                </div>


                <div className="placeholder2">


                    {this.state.historie.map(item => (
                        <div key={item.id} className="element">


                            <div className="element-left">
                                <h5>{item.yearFrom} - {item.yearTo}</h5>
                                <p className="overskrift">{item.headline}</p>
                                <p className="undertittel">- {item.subtitle}</p>
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