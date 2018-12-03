import React from 'react';
import TopNavigation from '../components/navigation/TopNavigation';

/**
 * Wraps a content view with the master layout components.
 * 
 * @param {*} ContentView - The content view to wrap.
 */
const LayoutView = (ContentView) => props => (
    <div>
        <TopNavigation />
        <div>
            <ContentView {...props} />
        </div>
    </div>
);

export default LayoutView;