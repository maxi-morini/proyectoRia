import React, { Component, Fragment } from 'react'
import Quiz from './Quiz';
import TrueOrFalse from './TrueOrFalse';
import Tiempo from './Tiempo';
import BtnSiguiente from './BtnSiguiente'
import ReactPlayer from "react-player"; //npm i react-player
import { withRouter} from 'react-router-dom';
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
			juego: this.props.juego, // solo string con el nombre
			name: this.props.jugador, // solo string con el nombre
			/*time: 10,*/
			pregunta: this.props.pregunta,
			correctitud: false,
			/*time: this.props.pregunta.tiempo,*/
			stop: false,
			//respuestas: [25, 25, 25, 25]
			playingVideo: true
		}
		this.stop = this.stop.bind(this);
	};

	QuizORTF = () => {
		//const isQuiz = this.props.isQuiz;
		//const isQuiz = ;
		if (this.props.pregunta.selectedAnswers === "quiz") {
			return <Quiz childFatherConn={this.callBackQuestionResponseQuizORTF} />
		} else {
			return <TrueOrFalse childFatherConn={this.callBackQuestionResponseQuizORTF} />
		}
	}

	callBackQuestionResponseQuizORTF = (payload) => {
		/*
			Esta funcion se pasa como parametro a los componentes hijos.
			Luego los componentes la usan para retornar cosas al padre.
			Expected payload: true, false..
		*/
		if (this.props.pregunta.posibleAnswers.correctAnswer = payload) {
			this.setState({ correctitud: true });
		}
		this.setState({ playingVideo: false });

		var esQuiz = false;
		if (this.state.pregunta.selectedAnswers === "quiz") {
			esQuiz = true;
		}

		this.props.history.push({
			pathname: '/puntuacionparcial',
			isQuiz: { isQuiz: esQuiz, },
			respuestas: { respuestas: [25, 25, 25, 25] }, // wtf
			pregunta: { numero: this.props.currentQuestion },
			puntaje: { vale: this.state.pregunta.puntos + " pts." },
			//correcta: { correcta: "A" },
			correcta: { correcta: this.props.pregunta.posibleAnswers.correctAnswer },
			maspreguntas: { maspreguntas: false }
		})

	}

	stop = () => {
		this.setState({ stop: true });
		//this.props.history.push(`/puntaje:${this.state.juego.Nombre}`)
	}

	render() {
		return (
			<Fragment>
				<div className="contenedor" style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", width: "100%", height: "100%" }}>
					<h3>{this.state.pregunta.pregunta}</h3>
				</div>
				<div className="contenedor" style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", width: "100%", height: "100%" }}>
					<ReactPlayer url={this.state.pregunta.selectedVideo.videoPrettyLink} playing={this.state.playing} />
				</div>
				<div className="contenedor" style={{ flexFlow: "row wrap", width: "100%", height: "100%" }}>
					<this.QuizORTF />
				</div>
				<div className="contenedor" style={{ flexFlow: "row wrap", width: "100%", height: "100%" }}>
					<Tiempo time={this.state.pregunta.tiempo} stop={this.state.stop} />
					<div style={{ width: "25%", height: "100%" }}>
						<BtnSiguiente stop={this.stop} />
					</div>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Preguntas)