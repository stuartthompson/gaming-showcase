import React from 'react';
import LayoutView from './LayoutView';

class FeedViewContent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Feed View</span>
                </div>
                <div>
                    <span>The feed will appear here.</span>
                </div>
            </div>
        );
    }
}

const FeedView = LayoutView(FeedViewContent);

export default FeedView;