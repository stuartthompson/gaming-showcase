import React from 'react';
import Menu from './Menu';

/**
 * Represents a top navigation bar component.
 */
export default class TopNavigation extends React.Component {
	render() {
		const menuItems = {
			leftSide: [
				{ linkText: 'Home', linkTo: '/' },
				{ linkText: 'Games', linkTo: 'games' },
				{ linkText: 'Feed', linkTo: 'feed' }
			],
			rightSide: [ { linkText: 'LogOut', linkTo: 'logout' } ]
		};
		const backgroundColor = '#b9b9b9';
		return (
			<Menu backgroundColor={backgroundColor} menuItems={menuItems} />
		);
	}
}
