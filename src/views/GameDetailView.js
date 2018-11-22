import React, { Component } from 'react';

export default class GameListView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Game Detail View</span>
                </div>
                <div>
                    <span>Game id: {this.props.match.params.gameid}</span>
                </div>
            </div>
        );
    }
}