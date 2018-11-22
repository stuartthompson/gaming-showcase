import React, { Component } from 'react';

const styles = {
	container: {
        backgroundColor: '#a8a8a8',
        display: 'flex',
		flex: 1,
		flexDirection: 'row'
    },
    menuContainer: {
        backgroundColor: '#808080',
        flex: 9/10,
        'justify-content': 'flex-start'
    },
	logoutButtonContainer: {
        backgroundColor: '#b9b9b9',
        flex: 1/10,
        'justify-content': 'flex-end'
	}
};

export default class TopNavigation extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<span style={styles.menuContainer}>Menu</span>
                <span style={styles.logoutButtonContainer}>Log Out</span>
			</div>
		);
	}
}
