import React, { Component } from 'react';

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
        fetch('http://localhost:8080/webprosjekt/backend.php', {
        method: 'POST', 
        header: {},
        body: form,
        })
    .then(res => res.json())
    .then(response => {
            if(response.success === false){
                //error
                this.setState({error: true})
            }
            if(response.success === true){
               //success
                this.setState({redirect: true})
               }
            console.log(response);
        })
    }
        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
        }
        
    
    
    submit = () => {
        var data = JSON.stringify(this.state);
        this.login(data);
    }
    
    componentDidMount() {
        var nav = document.querySelector('.navbar');
        nav.style.display = 'none';
    }
    
render(){
    return ( 
    
        <div className="loginbox">
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

/* under submitfunkjsonen, lag en ny funksjon som heter renderredirect, sjekker om staten er true. hvis den er true, kjør en return på <redirect to="/"> husk å importere med react router dom. 

import {redirect} from React-Router-Dom 

inni første div i return, legg til <this.renderRedirect } 


//authkeyen 
//lagre den i localstorage
// ha en komponent som sjekker den
// kryptert nøkkel gjennom bcrypt */