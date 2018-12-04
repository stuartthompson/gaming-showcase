import React, { useState } from 'react';
import LayoutView from './LayoutView';

function TestCountComponent() {
    const [count, setCount] = useState(0);
    return <div>
        <p>You clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
}

class HomeViewContent extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <span>Home View</span>
                    <TestCountComponent />
                </div>
            </div>
        );
    }
}

const HomeView = LayoutView(HomeViewContent);

export default HomeView;