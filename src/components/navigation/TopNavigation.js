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
		flex: 1 / 10,
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
	},
	spacerContainer: {
		flex: 6 / 10
	}
};

/**
 * Represents a menu component.
 */
class Menu extends React.Component {
	render() {
		const { menuItems } = this.props;
		const menuListItems = menuItems.map((menuItem) => (
			<MenuItem linkText={menuItem.linkText} linkTo={menuItem.linkTo} />
		));
		return <div style={styles.menuContainer}>{menuListItems}</div>;
	}
}

/**
 * Represents a menu item component.
 */
class MenuItem extends React.Component {
	render() {
		const { linkText, linkTo } = this.props;
		return (
			<Link to={linkTo} style={styles.menuItemContainer}>
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
		const menuItems = [
			{linkText: "Home", linkTo: "/"},
			{linkText: "Games", linkTo: "games"},
			{linkText: "Feed", linkTo: "feed"},
			{linkText: "LogOut", linkTo: "logout"}
		];
		return (
			<Menu menuItems={menuItems} />
			// <div style={styles.container}>
			// 	<MenuItem linkText="Home" linkTo="/" />
			// 	<MenuItem linkText="Games" linkTo="games" />
			// 	<MenuItem linkText="Feed" linkTo="feed" />
			// 	<div style={styles.spacerContainer} />
			// 	<MenuItem linkText="Logout" linkTo="logout" />
			// </div>
		);
	}
}
