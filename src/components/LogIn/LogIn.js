import React from 'react';
//import LogInHTML from 'login.html';

class LogIn extends React.Component {

	render() {
		return (
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
			*/
			<div className="LogIn">
				<div id="titulo">
					<h1>GameQuiz</h1>
				</div>
				<div class="columna">
					<form action="" >
						<div>
							<label for="user" >Nombre usuario:</label>
							<input name="user" type="text" required/>
						</div>
						<div>
							<label for="pass">Password:</label>
							<input name="pass" type="password" required/>
						</div>
					</form>
				</div>
			</div >

		);
	}

} export default LogIn;