import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
	menuContainer: {
        backgroundColor: '#00ff00',
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		height: 48,
		alignItems: 'center',
		textAlign: 'center'
	},
	menuItemContainer: {
		backgroundColor: '#555555',
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
    static propTypes = {
        backgroundColor: PropTypes.string,
        menuItems: PropTypes.object
    };
	render() {
        const { backgroundColor, menuItems } = this.props;
        // Calculate menu item widths
		const totalMenuItems = menuItems.leftSide.length + menuItems.rightSide.length;
		const menuItemWidth = 1 / totalMenuItems;
        const spacerWidth = (totalMenuItems / 2) + 2;
        // Map left-side menu items
		const leftMenuItems = menuItems.leftSide.map((menuItem) => (
			<MenuItem key={menuItem.linkText} linkText={menuItem.linkText} linkTo={menuItem.linkTo} width={menuItemWidth} />
        ));
        // Map right-side menu items
		const rightMenuItems = menuItems.rightSide.map((menuItem) => (
			<MenuItem key={menuItem.linkText} linkText={menuItem.linkText} linkTo={menuItem.linkTo} width={menuItemWidth} />
		));
		return (
			<div style={{...styles.menuContainer, backgroundColor: backgroundColor}}>
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

export default Menu;