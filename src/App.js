import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/tailwind.css'

import ExplorePage from './pages/explore'
import HomePage from './pages/home'

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/explore" exact>
					<ExplorePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
