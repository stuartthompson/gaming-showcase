import React from 'react';
import LayoutView from './LayoutView';

class GameListViewContent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Game List View</span>
                </div>
                <div>
                    <span>The list of games will appear here.</span>
                </div>
            </div>
        );
    }
}

const GameListView = LayoutView(GameListViewContent);

export default GameListView;