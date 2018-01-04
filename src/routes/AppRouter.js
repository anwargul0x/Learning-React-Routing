import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from '../Components/Header'
import Portfolio from '../Components/portfolio'
import Contact from '../Components/Contact'
import Welcome from '../Components/Welcome'

const AppRouter = () =>{
return(
	<div>
		<Router>
		<div><Header/>
			<Switch>
			<Route exact path = "/" component = {Welcome}/>
			<Route path = "/portfolio" component = {Portfolio} />
			<Route path="/contact" component={Contact} />
			<Route  render={()=><h1>404. Page Not Found</h1>} />
			</Switch>
		</div>				
		</Router>
	</div>
	)
}
export default AppRouter;
