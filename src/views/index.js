import React, { Component } from 'react';
import HomeView from './HomeView';
import GameListView from './GameListView';
import GameDetailView from './GameDetailView';
import FeedView from './FeedView';
import TopNavigation from '../components/navigation/TopNavigation';

/**
 * Wraps a content view with the master layout components.
 * 
 * @param {*} ContentView - The content view to wrap.
 */
const layoutView = (ContentView) => props => (
    <div>
        <TopNavigation />
        <div>
            <ContentView {...props} />
        </div>
    </div>
);

export { layoutView, HomeView, GameListView, GameDetailView, FeedView };