import React from 'react'
import {NavLink,Route} from 'react-router-dom'
import Item from '../Components/item'
const Portfolio = ({match}) => {
	return (
		<div>
		<h1>My Work</h1>
		<p>Check out the following  things i have done</p>
		<NavLink to = "/portfolio/itemOne">Item One</NavLink>
		<NavLink to="/portfolio/itemTwo">Item Two</NavLink>
			<Route path={`${match.url}/:id`} component={Item} />
		</div>)
}
export default Portfolio;