import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { layoutView, HomeView, GameListView, GameDetailView, FeedView } from './views';
import LogoutView from './views/LogoutView';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={layoutView(HomeView)} />
            <Route exact path="/games" component={layoutView(GameListView)} />
            <Route path="/games/:gameid" component={layoutView(GameDetailView)} />
            <Route exact path="/feed" component={layoutView(FeedView)} />
            <Route exact path="/logout" component={layoutView(LogoutView)} />
        </Switch>
    </BrowserRouter>
);

export default Router;