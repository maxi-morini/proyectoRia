import React, { Component, Fragment } from 'react'
import PuntuacionParcialTF from './PuntuacionParcialTF'
import PuntuacionParcialQuiz from './PuntuacionParcialQuiz'

import Titulo from '../Titulo';
import { Link } from 'react-router-dom';

export default class PuntuacionParcial extends Component {

	constructor(props) {
		super(props);
		this.state = {
			juego: this.props.history.location.gameplay.juego, // objeto juego
			currentQuestion: this.props.history.location.gameplay.currentQuestion, // int
			questionCant: this.props.history.location.gameplay.questionCant,
			sumatoriaPuntos: this.props.history.location.gameplay.sumatoriaPuntos,
			jugador: this.props.history.location.gameplay.jugador, // solo string con el nombre
			correcta:'',
		};

		this.onClickSiguiente = this.onClickSiguiente.bind(this);
	}

	QuizORTF = () => {
		const isQuiz = this.props.location.isQuiz.isQuiz;
		//console.log(this.props.history.location.respuestas);
		if (isQuiz === true) {
			return <PuntuacionParcialQuiz respuestas={this.props.history.location.respuestas.respuestas} correcta={this.state.correcta}/>
		} else {
			return <PuntuacionParcialTF respuestas={this.props.history.location.respuestas.respuestas} correcta={this.state.correcta}/>
		}
	}

	// terminar = () =>{
	//     if(this.props.location.maspreguntas.maspreguntas){
	//         document.getElementById("link").innerHTML =
	//         <Link to={{pathname: "/puntacionparcial",
	//         isQuiz: {isQuiz:true,},
	//         respuestas:    {respuestas:[25,25,25,25]},
	//         pregunta:{numero:1},
	//         puntaje:{vale:"100 pts."},
	//         correcta:{correcta:"A"}}} 
	//             id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
	//         >Siguiente</Link>
	//     }else{
	//         document.getElementById("link").innerHTML = <Link to={{pathname: "/puntaje",nombre: {nombre:this.props.jugador},puntaje:{puntaje:"100"}}}id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
	//         >Terminar</Link>
	//     }
	// }
	//<h1>{this.props.location.puntaje.vale}</h1>

	onClickSiguiente() {
		/*
		this.props.history.push({
			pathname: '/puntuacionparcial',
			gameplay: {
				juego: this.state.juego, // solo string con el nombre
				currentQuestion: this.state.currentQuestion,
				questionCant: this.state.questionCant,
				sumatoriaPuntos: newPuntaje,//this.state.sumatoriaPuntos, //actualizado
				jugador: this.state.jugador, // solo string con el nombre
			},
			isQuiz: { isQuiz: esQuiz, },
			respuestas: {respuestas: this.state.respuestas},
			pregunta: { numero: this.state.pregunta},
			puntaje: { vale: this.state.pregunta.puntos + " pts." },
			correcta: { correcta: this.state.pregunta.posibleAnswers.correctAnswer },
			maspreguntas: { maspreguntas: masPreguntas }
		});
		*/

		//console.log(this.props.history.location.maspreguntas);

		if (this.props.history.location.maspreguntas.maspreguntas === true) {
			//console.log("vamo a iniciado ");
			this.props.history.push({
				pathname: `/iniciado:${this.props.history.location.gameplay.jugador}`,
				nombre: { nombre: this.state.jugador },
				puntaje: { puntaje: "100" },
				juego: { nombre: "AnimalesQuiz" },
				gameplay: {
					juego: this.state.juego, // objeto juego
					currentQuestion: this.state.currentQuestion + 1,
					questionCant: this.state.questionCant,
					sumatoriaPuntos: this.state.sumatoriaPuntos,
					jugador: this.state.jugador // solo string con el nombre
				}
			});

		} else {
			//console.log("vamo a puntaje ");
			this.props.history.push({
				pathname: "/puntaje",
				nombre: { nombre: this.state.jugador },
				puntaje: { puntaje: this.state.sumatoriaPuntos },
				juego: { nombre: this.state.juego.Nombre },
				gameplay: this.props.history.location.gameplay
			});
		}
		
	}

	render() {

		//console.log(this.props);
		//console.log(this.state);
		var correcta = this.props.history.location.gameplay.juego.preguntasArr[this.props.history.location.gameplay.currentQuestion].posibleAnswers.correctAnswer;
		if(this.props.location.isQuiz.isQuiz){
			correcta = correcta.slice(-1);
		}
		return (
			<Fragment>
				<div style={{ height: "100vh" }}>
					<Titulo text={"GameQuiz"} />

					<h2>{"Pregunta " + (+this.state.currentQuestion + 1)}</h2>

					<h3>Puntos: {this.props.history.location.gameplay.juego.preguntasArr[this.props.history.location.gameplay.currentQuestion].puntos}</h3>
					<h3>Correcta: {correcta}</h3>
					<div className="contenedorCanvas" style={{ flexFlow: "row wrap", width: "100%", height: "40%" }}>
						<this.QuizORTF/>
					</div>

					<div id="link">
						<button className="button bloque" style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }} onClick={this.onClickSiguiente}>Siguiente</button>
						{/*
						<Link to={{

							pathname: `/iniciado:${this.props.history.location.gameplay.jugador}`,
							nombre: { nombre: this.state.jugador },
							puntaje: { puntaje: "100" },
							juego: { nombre: "AnimalesQuiz" },
							gameplay: this.props.history.location.gameplay,

						}} id="botonSiguiente" className="button bloque"
							style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}>
							Siguiente</Link>
							*/}

					</div>


					<div id="link">
						<Link to={{

							pathname: "/puntaje",
							nombre: { nombre: this.state.jugador },
							puntaje: { puntaje: "100" },
							juego: { nombre: "AnimalesQuiz" },
							gameplay: this.props.history.location.gameplay,

						}} id="boton" className="button bloque"
							style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}>
							Terminar</Link>
					</div>
				</div>
			</Fragment>
		)
	}
}