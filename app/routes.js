import React from 'react';
import {Route} from 'react-router';
import App from './components/App.js';
import Home from './components/Home.js';
import AddCharacter from './components/AddCharacter.js';
import Character from './components/Character';


export default (
	<Route component={App}>
		<Route path='/' component={Home} />
		<Route path='/add' component={AddCharacter} />
		<Route path='/characters/:id' component={Character} />
	</Route>
);

