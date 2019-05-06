import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Login from '../pages/Login';
import Hjem from '../pages/Hjem';
import Venner from '../pages/Venner';
import Booking from '../pages/Booking';
import Kontakt from '../pages/Kontakt';
import Events from '../pages/Events';
import Historie from '../pages/Historie';



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


