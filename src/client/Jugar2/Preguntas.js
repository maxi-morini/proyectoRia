import React, { Component, Fragment } from 'react'
import Quiz from './Quiz';
import TrueOrFalse from './TrueOrFalse';
import Tiempo from './Tiempo';
import BtnSiguiente from './BtnSiguiente'
import ReactPlayer from "react-player"; //npm i react-player
import { withRouter } from 'react-router-dom';
/*
 {
			"selectedAnswers": "truefalse",
			"tiempo": "12",
			"pregunta": "Funcionaria la harina como talco?",
			"posibleAnswers": {
			  "correctAnswer": "true"
			},
			"selectedVideo": {
			  "videoID": "-v1RcQEcofQ",
			  "videoLink": "https://www.youtube.com/watch?v=-v1RcQEcofQ",
			  "videoPrettyLink": "https://www.youtube-nocookie.com/embed/-v1RcQEcofQ?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=141&end=144",
			  "videoStart": "141",
			  "videoEnd": "144",
			  "videoThumbnailBig": "https://img.youtube.com/vi/-v1RcQEcofQ/0.jpg",
			  "videoThumbnailSmall": "https://img.youtube.com/vi/-v1RcQEcofQ/1.jpg"
			},
			"puntos": "3",
			"key": 1
		  }
*/
class Preguntas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			juego: this.props.gameplay.juego, // objeto juego
			currentQuestion: this.props.gameplay.currentQuestion,
			questionCant: this.props.gameplay.questionCant,
			sumatoriaPuntos: this.props.gameplay.sumatoriaPuntos,
			jugador: this.props.gameplay.jugador, // solo string con el nombre
			//
			// al darle siguiente en una grafica se debe checkear que es la ultima pregunta, y enviar a terminar e vez de iniciado
			pregunta: this.props.gameplay.juego.preguntasArr[this.props.gameplay.currentQuestion],
			//
			/*time: 10,*/

			correctitud: false,
			/*time: this.props.pregunta.tiempo,*/
			stop: false,
			//respuestas: [25, 25, 25, 25], // cantidad de veces que se responden?
			respuestas: this.props.gameplay.juego.preguntasArr[this.props.gameplay.currentQuestion].respuestasParciales,


			playingVideo: true
		}
		//this.stop = this.stop.bind(this);
	};

	componentDidMount() {
	}

	QuizORTF = () => {
		if (this.state.pregunta.selectedAnswers === "quiz") {
			return <Quiz childFatherConn={this.callBackQuestionResponseQuizORTF} />
		} else {
			return <TrueOrFalse childFatherConn={this.callBackQuestionResponseQuizORTF} />
		}
	}

	callBackQuestionResponseQuizORTF = (payload) => {
		/*
			Esta funcion se pasa como parametro a los componentes hijos.
			Luego los componentes la usan para retornar cosas al padre.
			Expected payload: true, false.. quizA?
		*/
		if (this.state.pregunta.posibleAnswers.correctAnswer = payload) {
			//this.setState({ correctitud: true });
			var newPuntaje = this.state.sumatoriaPuntos + this.state.pregunta.puntos
		}
		this.setState({ playingVideo: false });

		var esQuiz = false;
		if (this.state.pregunta.selectedAnswers === "quiz") {
			esQuiz = true;
		} // legacy?

		var masPreguntas = false;
		//console.log(this.state.currentQuestion );
		//console.log(this.state.juego.Preguntas);
		if (this.state.currentQuestion < (this.state.juego.Preguntas - 1)) {
			masPreguntas = true;
		}

		console.log(this.state.juego.Preguntas);
		
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
			/* respuestas: { respuestas: [25, 25, 25, 25] }, // wtf */
			respuestas: { respuestas: this.state.respuestas },
			pregunta: { numero: this.state.pregunta },
			puntaje: { vale: this.state.pregunta.puntos + " pts." },
			correcta: { correcta: this.state.pregunta.posibleAnswers.correctAnswer },
			maspreguntas: { maspreguntas: masPreguntas }
			/*
			isQuiz: { isQuiz: esQuiz, },
			pregunta: { numero: this.props.currentQuestion },
			puntaje: { vale: this.state.pregunta.puntos + " pts." },
			correcta: { correcta: this.props.pregunta.posibleAnswers.correctAnswer },
			
			*/
		})

	}

	stop = () => {
		// aqui es llamado cuando el timer llega a 0
		this.callBackQuestionResponseQuizORTF(""); // ???
		//this.setState({ stop: true });
		//this.props.history.push(`/puntaje:${this.state.juego.Nombre}`)
	}

	render() {


		return (
			<Fragment>
				{/* style={{position:"absolute",zIndex:"1",alignContent:"center"}} */}
				<div className="columna" >
				<div className="contenedor" style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", width: "100%", height: "100%" }}>
					<h3>{this.state.pregunta.pregunta}</h3>
				</div>
				<div className="contenedor" style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", width: "100%", height: "25%" }}>
					<ReactPlayer url={this.state.pregunta.selectedVideo.videoPrettyLink} playing={this.state.playing} />
				</div>
				<div className="contenedor" style={{ flexFlow: "row wrap", width: "100%", height: "100%"}}>
					<this.QuizORTF />
				</div>
				<div className="contenedor" style={{ flexFlow: "row wrap", width: "100%", height: "100%" }}>
					<Tiempo time={this.state.pregunta.tiempo} stop={this.state.stop} />
					<div style={{ width: "25%", height: "100%" }}>
						<BtnSiguiente stop={this.stop} />
					</div>
				</div>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Preguntas)