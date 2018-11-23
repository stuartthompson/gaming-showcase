import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
	menuContainer: {
		backgroundColor: '#a8a8a8',
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		height: 48,
		alignItems: 'center',
		textAlign: 'center'
	},
	menuItemContainer: {
		backgroundColor: '#b9b9b9',
		color: '#000000',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		textDecoration: 'none'
	},
	menuItemSpacer: {
		flex: 1
	},
	menuItemContentContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	menuItemIconContainer: {},
	menuItemTextContainer: {
		paddingLeft: 6,
		textAlign: 'left'
	}
};

/**
 * Represents a menu component.
 */
class Menu extends React.Component {
	render() {
		const { menuItems } = this.props;
		const totalMenuItems = menuItems.leftSide.length + menuItems.rightSide.length;
		const menuItemWidth = 1 / totalMenuItems;
		const spacerWidth = (totalMenuItems / 2) + 2;
		const leftMenuItems = menuItems.leftSide.map((menuItem) => (
			<MenuItem linkText={menuItem.linkText} linkTo={menuItem.linkTo} width={menuItemWidth} />
		));
		const rightMenuItems = menuItems.rightSide.map((menuItem) => (
			<MenuItem linkText={menuItem.linkText} linkTo={menuItem.linkTo} width={menuItemWidth} />
		));
		return (
			<div style={styles.menuContainer}>
				{leftMenuItems}
				<div style={{flex: spacerWidth / totalMenuItems }} />
				{rightMenuItems}
			</div>
		);
	}
}

/**
 * Represents a menu item component.
 */
class MenuItem extends React.Component {
	render() {
		const { linkText, linkTo, width } = this.props;
		return (
			<Link to={linkTo} style={{...styles.menuItemContainer, flex: width}}>
				<div style={styles.menuItemSpacer} />
				<div style={styles.menuItemContentContainer}>
					<div>I</div>
					<div style={styles.menuItemTextContainer}>
						<span>{linkText}</span>
					</div>
				</div>
				<div style={styles.menuItemSpacer} />
			</Link>
		);
	}
}

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
		return (
			<Menu menuItems={menuItems} />
		);
	}
}
