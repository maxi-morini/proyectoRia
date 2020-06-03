import React from 'react';
import './App.css';
//
import Home from './components/Home/Home.js';
import LogInHTML from './components/LogIn/LogIn.js';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<span>App</span>
				<LogInHTML />
				<Home />
			</div>
        );
	}

} export default App;
