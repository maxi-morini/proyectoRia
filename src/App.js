import React from 'react';
import './App.css';
//
import Home from './components/Home/Home.js';
import LogIn from './components/LogIn/LogIn.js';

const inicialState = {
	route: 'Home',
	pagina: 'home'
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = inicialState;
	}

	onRouteChange = (route) => {
		if (route === 'Home') {
			this.setState({ pagina: 'home', route });
		} else if (route === 'LogIn') {
			this.setState({ pagina: 'login', route });
		}
	}

	render() {
		let currentComponent;

		switch (this.state.route) {
			default:
			case 'Home':
				currentComponent = (
					<div>
						<Home onRouteChange={this.onRouteChange} />
					</div>
				);
				break;
			case 'LogIn':
				currentComponent = (
					<div>
						<LogIn onRouteChange={this.onRouteChange} />
					</div>
				);
				break;
		}

		return (
			<div className="App">
				{currentComponent}
			</div>
		);
	}

} export default App;
