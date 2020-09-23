import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/tailwind.css'
import 'croppie/croppie.css'

import ExplorePage from './pages/Explore'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import ProfileEditPage from './pages/ProfileEdit'
import LoginPage from './pages/Login'
import Nav from './components/Nav'

export default function App() {
	return (
		<BrowserRouter>
			<div className="max-w-4xl m-auto p-4">
				<Nav />
			</div>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/login" exact>
					<LoginPage />
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
