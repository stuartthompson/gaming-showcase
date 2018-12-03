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
				{ linkText: 'Games', linkTo: '/games' },
				{ linkText: 'Feed', linkTo: '/feed' }
			],
			rightSide: [ { linkText: 'LogOut', linkTo: '/logout' } ]
		};
		const colors = {
			menuBgColor: '#b9b9b9',
			menuItemColors: {
				normal: '#dfdfdf',
				hover: '#0000cc'
			}
		}
		return (
			<Menu colors={colors} menuItems={menuItems} />
		);
	}
}
