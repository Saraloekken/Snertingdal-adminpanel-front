import React, {Component}  from 'react';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';


export default class Authentication extends Component {
        
componentDidMount() {
    var cookies = new Cookies();
    var token = cookies.get('loginToken');
    
    if (!token) {
        return;
    }
    
    var form = new FormData();
    form.append('token', JSON.stringify({token: token}));
    
    fetch('http://folk.ntnu.no/saralok/snertingdal/logout.php', {
        method: 'POST',
        body: form,
    });
    
    cookies.remove('loginToken');
}    
    
    
    
    
render(){
    return (
        <Redirect to='/login'/>
    ); 
}
    
    
    
    
    
}

