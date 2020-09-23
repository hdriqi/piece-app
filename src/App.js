import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/tailwind.css'

import ExplorePage from './pages/Explore'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'

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
				<Route path="/:userId" exact>
					<ProfilePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
