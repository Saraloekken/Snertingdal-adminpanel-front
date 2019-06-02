import React, {Component}  from 'react';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';


export default class Authentication extends Component {
constructor(props) {
    super(props);

    this.state = {
      authenticated: true,
    };
  }
    
    
    
componentDidMount() {
    var redirectToLogin = () => {
        this.setState({authenticated:false});
    };
    
    var cookies = new Cookies();
    var token = cookies.get('loginToken');
    
    console.log(token);
    
    if (!token) {
        redirectToLogin();
        return;
    }
    
    var form = new FormData();
    form.append('token', JSON.stringify({token: token}));
    
    fetch('http://folk.ntnu.no/saralok/snertingdal/authentication.php', {
        method: 'POST',
        body: form,
    })
    .then(res => res.json())
    .then(response => {
        if(response.success === false){
            redirectToLogin();
        }
    }).catch(() => redirectToLogin());
}    
    
    
    
    
render(){
    
    var redirect = '';
    if(this.state.authenticated===false){
    redirect=<Redirect to ="/login"/>;
    }
    
    
    return(
    <div>{redirect}</div>
    )
        
        
        
    }
    
    
    
    
    
}











// bilde i datebase - varchar - blob eller base64 string i et tekstfelt.    