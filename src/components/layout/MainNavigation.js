import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const active = (dat) => (dat.isActive ? classes.active : '');
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='quotes' className={active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to='new-quote' className={active}>
							Add Quotes
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
