import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Users from '../Users';

const Main = props =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/series" component={Users} />
        <Route exact path="/news" component={Users} />
    </Switch>
);

export default Main;