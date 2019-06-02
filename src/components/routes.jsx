import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';


import Login from '../pages/login';
import Hjem from '../pages/hjem';
import Venner from '../pages/venner';
import Kontaktinfo from '../pages/kontaktinfo';
import Events from '../pages/events';
import Nyevent from '../pages/nyevent';
import Podcasts from '../pages/podcasts';
import Historie from '../pages/historie';


export default class Routes extends Component {

    
requireAuth(nextState, replace, next){
    if (true) {
        replace({
            pathname: "/login",
            state: {nextPathname: nextState.location.pathname}
        });
    }
    
    next();
}    
    
    
    render(){
        return(
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/hjem" exact component={Hjem} onEnter={this.requireAuth} />
                <Route path="/nyevent" exact component={Nyevent} onEnter={this.requireAuth} />
                <Route path="/venner" exact component={Venner} onEnter={this.requireAuth} />
                <Route path="/kontaktinfo" exact component={Kontaktinfo} onEnter={this.requireAuth} />
                <Route path="/events" exact component={Events} onEnter={this.requireAuth} />  
                   <Route path="/podcasts" exact component={Podcasts} onEnter={this.requireAuth} />  
                <Route path="/historie" exact component={Historie} onEnter={this.requireAuth} />
                <Route path="/" exact component={Login} /> 
            </Switch>
        );
    }
}











// bilde i datebase - varchar - blob eller base64 string i et tekstfelt.    