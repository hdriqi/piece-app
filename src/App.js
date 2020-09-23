import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'croppie/croppie.css'
import './styles/tailwind.css'

import ExplorePage from './pages/Explore'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import ProfileEditPage from './pages/ProfileEdit'

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
				<Route path="/me/edit" exact>
					<ProfileEditPage />
				</Route>
				<Route path="/:userId" exact>
					<ProfilePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
