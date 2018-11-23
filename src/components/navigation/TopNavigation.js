import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
	container: {
		backgroundColor: '#a8a8a8',
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		height: 48,
		alignItems: 'center',
		textAlign: 'center'
	},
	menuItem: {
		color: '#000000',
		textDecoration: 'none'
	},
	menuItemContainer: {
		backgroundColor: '#b9b9b9',
		display: 'flex',
		flex: 1 / 10,
		flexDirection: 'column',
		height: '100%'
	},
	menuItemSpacer: {
		flex: 1
	},
	homeLinkContainer: {
		flex: 1
	},
	homeLink: {},
	menuItemContentContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	menuItemIconContainer: {
	},
	menuItemTextContainer: {
		paddingLeft: 6,
		textAlign: 'left'
	},
	gamesButtonContainer: {
		flex: 1 / 10
	},
	gamesLink: {
		alignItems: 'flex-end'
	},
	feedButtonContainer: {
		flex: 1 / 10
	},
	spacerContainer: {
		flex: 6 / 10
	},
	logoutButtonContainer: {
		flex: 1 / 11
	}
};

/**
 * Represents a menu item component.
 */
class MenuItem extends React.Component {
	render() {
		const { linkText, linkTo } = this.props;
		return (
			<div style={styles.menuItemContainer}>
				<div style={styles.menuItemSpacer} />
				<div style={styles.menuItemContentContainer}>
					<div style={styles.menuItemIconContainer}>I</div>
					<div style={styles.menuItemTextContainer}>
						<Link to={linkTo} style={styles.menuItem}>
							{linkText}
						</Link>
					</div>
				</div>
				<div style={styles.menuItemSpacer} />
			</div>
		);
	}
}

/**
 * Represents a top navigation bar component.
 */
export default class TopNavigation extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<MenuItem linkText="Home" linkTo="/" />
				<MenuItem linkText="Games" linkTo="games" />
				<MenuItem linkText="Feed" linkTo="feed" />
				<div style={styles.spacerContainer} />
				<div style={styles.logoutButtonContainer}>Log Out</div>
			</div>
		);
	}
}
