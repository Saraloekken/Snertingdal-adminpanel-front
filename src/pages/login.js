import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component { 
    constructor(props){
        super(props);

        this.state={

            error: false,
            redirect: false,    

            username: '',
            password: ''             

        }
    }
        
        
    login = (data) => {
        var form = new FormData();
        
        form.append('login', data);
        fetch('http://folk.ntnu.no/saralok/snertingdal/backend.php', {
        method: 'POST', //bruk get i backend   
        header: {},
        body: form,
        })
    .then(res => res.json())
    .then(response => {
            if(response.success === false){   //nei
                
                this.setState({error: true})
            }
            if(response.success === true){   //ja
              
                localStorage.setItem('auth', response.authentication)
                this.setState({redirect: true})
           }
          
        })
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
        
    
    
    submit = () => {
        var data = JSON.stringify(this.state);
        this.login(data);
    }
    
    renderRedirect = () => {
        if (this.state.redirect === true) {
            return <Redirect to='/hjem'/>
        }
    }
    

    componentDidMount() {
        var nav = document.querySelector('.navbar');
        nav.style.display = 'none';
        
        if(localStorage.getItem('auth') !== null) {
            localStorage.removeItem('auth');
        }
    }
    componentWillUnmount() {
        var nav = document.querySelector('.navbar');
        nav.style.display = 'block';
    }

         
    render(){
        return ( 
        
            <div className="loginbox">

                {this.renderRedirect()}

                <i className="fal fa-users-cog"></i>
                <div className="username">

                    <input type="text" name="username" 
                    className="input" placeholder="Brukernavn"
                    onChange={this.handleChange.bind(this)}/>

                    <i className="fa fa-user"></i>
                
                </div>    
                
                <div className="password">
                    
                    <input type="password" name="password" 
                    className="input" placeholder="Passord"
                    onChange={this.handleChange.bind(this)}/>
                        
                    <i className="fa fa-lock"></i>

                </div>
            
                <button type="button" className="button" onClick={this.submit}>Logg inn</button>
            
            </div>
        
            

        )
    }
}    

/* lag en ny funksjon som heter renderredirect, sjekker om staten er true. hvis den er true, kjør en return på <redirect to="/"> 

import {redirect}

legg til <this.renderRedirect } 


//authkeyen 
//lagre den i localstorage
// ha en komponent som sjekker den
// kryptert nøkkel gjennom bcrypt */