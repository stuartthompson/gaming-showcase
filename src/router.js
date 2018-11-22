import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { layoutView, HomeView, GameListView, GameDetailView } from './views';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={layoutView(HomeView)} />
            <Route exact path="/games" component={layoutView(GameListView)} />
            <Route path="/games/:gameid" component={layoutView(GameDetailView)} />
        </Switch>
    </BrowserRouter>
);

export default Router;