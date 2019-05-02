import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Login from '../pages/login';
import Hjem from '../pages/hjem';
import Venner from '../pages/venner';
import Booking from '../pages/booking';
import Kontakt from '../pages/kontakt';
import Events from '../pages/events';
import Historie from '../pages/events';



const Routes = () => (
    <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/hjem" exact component={Hjem} />
        <Route path="/venner" exact component={Venner} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/kontakt" exact component={Kontakt} />
        <Route path="/events" exact component={Events} />
        <Route path="/historie" exact component={Historie} />
        
    </Switch>
);

export default Routes;


