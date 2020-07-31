import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Routes from './Routes'


class App extends React.Component {
	render() {
		return (
			<Routes />
		)
	}
}
export default App;