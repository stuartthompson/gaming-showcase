import React from 'react';
import LayoutView from './LayoutView';

class LogoutViewContent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Logout View</span>
                </div>
                <div>
                    <span>You have been logged out!</span>
                </div>
            </div>
        );
    }
}

const LogoutView = LayoutView(LogoutViewContent);

export default LogoutView;