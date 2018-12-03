import React from 'react';
import LayoutView from './LayoutView';

class HomeViewContent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <span>Home View</span>
                </div>
            </div>
        );
    }
}

const HomeView = LayoutView(HomeViewContent);

export default HomeView;