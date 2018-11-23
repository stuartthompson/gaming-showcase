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
		textUnderline: 'none'
	},
	homeButtonContainer: {
		flex: 1 / 10,
	},
	homeLink: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center'
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
 * Represents a top navigation bar component.
 */
export default class TopNavigation extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.homeButtonContainer}>
					<Link to="/" style={{...styles.homeLink, ...styles.menuItem}}>Home</Link>
				</div>
				<div style={styles.gamesButtonContainer}>
					<Link to="games" style={{...styles.gamesLink, ...styles.menuItem}}>Games</Link>
				</div>
				<div style={styles.feedButtonContainer}>
					<Link to="feed" style={{...styles.feedLink, ...styles.menuItem}}>Feed</Link>
				</div>
				<div style={styles.spacerContainer} />
				<div style={styles.logoutButtonContainer}>Log Out</div>
			</div>
		);
	}
}
