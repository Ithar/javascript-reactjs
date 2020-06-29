import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Users from '../Users';
import SeriesList from '../Series/List';
import SeriesView from '../Series/View';
import NewsList from '../News/List';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/series" component={SeriesList} />
        <Route exact path="/series/:id" component={SeriesView} />
        <Route exact path="/news" component={NewsList} />
    </Switch>
);

export default Main;