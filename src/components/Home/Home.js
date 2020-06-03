import React from 'react';

class Home extends React.Component {
	render() {
		return (
			//<span>Home</span>
			/*
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
					<div style="grid-row-start: 2;grid-column-start: 2;">
						<a href="" class="bloque" style="height: 100%;" >Jugar</a>
					</div>
					<div style="grid-row-start: 4;grid-column-start:2;">
						<a href="login.html" class="bloque" style="height: 100%;" >Crear Juego</a>
					</div>
			</body>
			</html>
			*/
			<div class="container">
				<div id="titulo">
					<h1>GameQuiz</h1>
				</div>
				<div>
					<a href="" class="bloque">Jugar</a>
				</div>
				<div>
					<a href="" class="bloque" >Crear Juego</a>
				</div>
			</div>
		);
	}

} export default Home;