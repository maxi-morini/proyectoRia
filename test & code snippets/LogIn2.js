import React from 'react';

class LogIn extends React.Component {


	constructor(props) {
		super(props);
		this.state = { value3: "this is a test" };
		//this.onClick3 = this.onClick3.bind(this);

		this.onClick3 = this.onClick3.bind(this); // cosas de ES6..
		this.onClick4 = this.onClick4.bind(this); // cosas de ES6..
	}
	

	// test push 
	
	state = { value: ''}

	onClick1() {
		return (
			<span>soy algo 1</span>
		);
	};

	onClick2() {
		return (
			<span>soy algo 2</span>
		);
	};

	onClick3() {
		this.setState({ value3: "asdasd" });
	};
	onClick4() {
		let asdasd = <span>soy algo 4</span>
		this.setState({ value3: asdasd });
	};


	render() {
		return (
			<div>
				<div>
					<span>Input text with state</span>
					<input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
					<p>{this.state.value}</p>
				</div>
				<div>
					<span>button state1</span>
					<button onClick={e => this.setState({ value2: this.onClick1() })} />

					<span>button state2</span>
					<button onClick={e => this.setState({ value2: this.onClick2() })} />
					<p>{this.state.value2}</p>

					<br></br>
					<span>button state3</span>
					<button onClick={this.onClick3} />
					<span>button state4</span>
					<button onClick={this.onClick4} />

					<p>{this.state.value3}</p>
					
				</div>
			</div>
		);
	}

} export default LogIn;

/*
//import React from 'react';
//import LogInHTML from 'login.html';
//import ReactDOM from 'react-dom';
import React, { useState } from 'react';

class LogIn extends React.Component {

	constructor(props) {
		super(props);
		const soyUnEstado = useState([]);
		this.soyUnEstado =
			<form action="" >
				< div >
					<label for="user" >Nombre usuario:</label>
					<input name="user" type="text" required />
				</div >
				<div>
					<label for="pass">Password:</label>
					<input name="pass" type="password" required />
				</div>
				<input type="button" onClick={this.tick} />
			</form >
		;
	}



	tick() {
		const element = (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {new Date().toLocaleTimeString()}.</h2>
			</div>
		);
		this.soyUnEstado  = element;
		//ReactDOM.render(element, document.getElementById('App2'));
	};


	render() {
		return (
			<div className="LogIn">
				<div class="columna">
					<soyUnEstado/>
				</div>
			</div >
			//<span>LogIn</span>
			/*
			<div className="LogIn">
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" type="text/css" href="style.css">
					<title>GameQuiz</title>
				</head>
				<body>
					<div class="container">
						<div id="titulo"style="font-size: 3vmax;grid-row: 1 ;grid-column-start: 2;"><h1>GameQuiz</h1></div>
						<div class="columna" style="grid-row:2 / 3;grid-column-start: 2;justify-content: space-evenly;">
							<form action="" >
								<div>
									<label for="user" >Nombre usuario:</label>
									<input name="user" type="text" required>
								</div>
								<div>
									<label for="pass">Password:</label>
									<input name="pass" type="password" required>
								</div>
							</form>
							<a href="login.html" class="bloque" >Iniciar Sesión</a>
						</div>
						<div style="grid-row-start: 4;grid-column-start:2;">
							<a href="login.html" class="bloque" style="height: 100%;" >Registrarse</a>
						</div>
					</div>
				</body>
				</html>
			</div>

			<div id="titulo">
					<h1>GameQuiz</h1>
				</div>




		);
	}

} export default LogIn;

*/