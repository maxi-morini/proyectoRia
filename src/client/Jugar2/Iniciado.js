import React, { Component, Fragment } from 'react'
import Titulo from '../Titulo'
import Tiempo from './Tiempo';
import BtnSiguiente from './BtnSiguiente';
import Preguntas from './Preguntas';
import PuntuacionParcial from './PuntuacionParcial';
import PuntuacionTotal from './PuntuacionTotal'
import { Link } from 'react-router-dom';

export default class Iniciado extends Component {

	constructor(props) {
		super(props);
		/*this.state = {
			juego: this.props.history.location.state.juego,
			name: '',
			sumatoria: 0,
			//time: 10, stop: false, respuestas: [25, 25, 25, 25]
			currentQuestion: 0
		}*/
		/*
		gameplay: {
				juego: this.props.history.location.state.juego,
				currentQuestion: 0,
				questionCant: this.props.history.location.state.juego.preguntas,
				sumatoriaPuntos: 0,
				jugador: ''
			},
		*/
		console.log(this.props);
		this.state = {
			gameplay: this.props.history.location.gameplay/*,
			totalTime: 5*/
		}
	};
	/*
	async componentDidMount() {
		const juegos = this.props.match.params.juego;
		let ind = juegos.lastIndexOf(":");
		const aux1 = juegos.slice(0, ind);
		this.setState({ name: aux1 });

		//const aux2 = juegos.substring(ind + 1);
		//const url = "/api/juegos";
		//const response = await fetch(url);
		//const data = await response.json();	
		//this.setState({ juego: data.filter(juego => juego.Nombre == aux2)[0] });
	}
*/
	sumarPuntaje() {

	}
	/*
	callBackQuestionResponse(payload) {
		let newSumatoria = this.state.sumatoria + payload;
		let nextQuestionIndex = currentQuestion + 1;
		this.setState({ sumatoria: newSumatoria });
		if (nextQuestionIndex === this.state.juego.Preguntas - 1) {
			// fin, redireccion a los totales
		} else {
			this.setState({ currentQuestion: nextQuestionIndex });
		}
	}
	*/
	render() {
		let someJSX;

		if (this.state.gameplay.juego.Preguntas === 0) {
			someJSX = (
				<Fragment>
					<div style={{height:"100vh"}}>
					<Titulo text={"GameQuiz"} />
					<div style={{ height: "25vh" }}>
						<h3>El juego no contiene preguntas.</h3>
					</div>
					</div>
				</Fragment>
			);
			return someJSX;
		}

		someJSX = (
			<Fragment>
				<div style={{height:"100vh"}}>
				<Titulo text={"GameQuiz"} />
				<div style={{ height: "25vh" }}>
					<Preguntas
						gameplay={this.state.gameplay}
					/>
				</div>
				{/*
						childFatherConn={this.callBackQuestionResponse}
						isQuiz={true}
						jugador={this.state.name}
						juego={this.state.juego.nombre}
						pregunta={this.state.juego.preguntasArr[this.state.currentQuestion]}
						currentQuestion={this.state.currentQuestion}

					<PuntuacionTotal nombre={this.state.juego.Nombre}/> 
					<PuntuacionParcial isQuiz={false} respuestas={this.state.respuestas }/>
				*/}
				</div>
			</Fragment>
		);

		return someJSX;
	}
}
