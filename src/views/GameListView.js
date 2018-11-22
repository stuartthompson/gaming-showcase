import React, { Component } from 'react';

export default class GameListView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Game List View</span>
                </div>
                <div>
                    <span>Props: {this.props.testData}</span>
                </div>
            </div>
        );
    }
}