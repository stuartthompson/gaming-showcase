import React from 'react';
import LayoutView from './LayoutView';

class GameListViewContent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Game Detail View</span>
                </div>
                <div>
                    <span>Game id: {this.props.gameid}</span>
                </div>
            </div>
        );
    }
}

const GameListView = LayoutView(GameListViewContent);

export default GameListView;