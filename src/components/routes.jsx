import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Component} from 'react';
import Cookies from 'universal-cookie';
import Login from '../pages/login';
import Hjem from '../pages/hjem';
import Venner from '../pages/venner';
import Kontaktinfo from '../pages/kontaktinfo';
import Events from '../pages/events';
import Nyevent from '../pages/nyevent';
import Podcasts from '../pages/podcasts';
import Historie from '../pages/historie';
import Logout from '../components/logout';


export default class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/hjem" exact component={Hjem}/>
                <Route path="/nyevent" exact component={Nyevent}/>
                <Route path="/venner" exact component={Venner}/>
                <Route path="/kontaktinfo" exact component={Kontaktinfo}/>
                <Route path="/events" exact component={Events}/>
                <Route path="/podcasts" exact component={Podcasts}/>
                <Route path="/historie" exact component={Historie}/>
                <Route path="/logout" exact component={Logout}/>}
                <Route path="/" exact component={Login}/>
            </Switch>
        );
    }
}
