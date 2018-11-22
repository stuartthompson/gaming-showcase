import React, { Component } from 'react';
import HomeView from './HomeView';
import GameListView from './GameListView';
import GameDetailView from './GameDetailView';

const layoutView = (ContentView) => props => (
    <div>
        <span>Top Navigation</span>
        <div>
            <ContentView {...props} />
        </div>
    </div>
);

export { layoutView, HomeView, GameListView, GameDetailView };