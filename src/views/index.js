import React, { Component } from 'react';
import HomeView from './HomeView';
import GameListView from './GameListView';
import GameDetailView from './GameDetailView';
import TopNavigation from '../components/navigation/TopNavigation';

const layoutView = (ContentView) => props => (
    <div>
        <TopNavigation />
        <div>
            <ContentView {...props} />
        </div>
    </div>
);

export { layoutView, HomeView, GameListView, GameDetailView };