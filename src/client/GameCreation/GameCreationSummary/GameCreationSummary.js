import React from 'react';
import QuestionThumbnailSlot from "../../QuestionThumbnail/QuestionThumbnailSlot.js"
import './GameCreationSummary.css';

import Titulo from '../../Titulo.js';

const testPropsJuego =
{
	"key": 0,
	"nombreJuego": "asdasd",
	"settings": {
		"descripcion": "asdasd",
		"privacidad": false,
		"password": "sd2111",
		"cover": "https://images7.memedroid.com/images/UPLOADED364/5edf22bcac059.jpeg"
	},
	"preguntas": [
		{
			"show": false,
			"selectedAnswers": "quiz",
			"tiempo": "12",
			"pregunta": "asda sdsad  dfgdfgse4t",
			"posibleAnswers": {
				"correctAnswer": "quizC",
				"options": {
					"quizAText": "sdaaa",
					"quizBText": "sd",
					"quizCText": "aaaa",
					"quizDText": "sda"
				}
			},
			"selectedVideo": {
				videoID: "yy8aprH0ceE",
				videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
				videoStart: "",
				videoEnd: "",

			},
			"puntos": "21",
			"key": 1
		},
		{
			"show": false,
			"selectedAnswers": "truefalse",
			"tiempo": "1",
			"pregunta": "asd reaaaaally large querstion sdfoihjsdogi dfho[gdfiod sgio[dfj goifgoidfjgfdjgfj gdfg 444",
			"posibleAnswers": {
				"correctAnswer": "false",
				"options": {}
			},
			"selectedVideo": {
				videoID: "yy8aprH0ceE",
				videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
				videoStart: "",
				videoEnd: "",

			},
			"puntos": "5",
			"key": 2
		},
		{
			"show": false,
			"selectedAnswers": "truefalse",
			"tiempo": "1",
			"pregunta": "asd444",
			"posibleAnswers": {
				"correctAnswer": "false",
				"options": {}
			},
			"selectedVideo": {
				videoID: "yy8aprH0ceE",
				videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
				videoStart: "",
				videoEnd: "",

			},"puntos": "5",
			"key": 2
		},
		{
			"show": false,
			"selectedAnswers": "truefalse",
			"tiempo": "1",
			"pregunta": "asd444",
			"posibleAnswers": {
				"correctAnswer": "false",
				"options": {}
			},
			"selectedVideo": {
				videoID: "yy8aprH0ceE",
				videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
				videoStart: "",
				videoEnd: "",

			},
			"puntos": "5",
			"key": 2
		}
	],
	"directLink": "LruyZyIxqrGkqiht6eSbqYOXQU0uhJVX88k"
}

class GameCreationSummary extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state.juego = testPropsJuego;

		this.gameEnable = this.gameEnable.bind(this);
	}

	gameEnable() {
		const url = "/api/juegos";
		const data = { juego: this.state.juego };

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.catch(error => console.error('gameEnable: Error:', error))
			.then(response => console.log('gameEnable: Success:', response));
	}


	render() {
		return (
			<div className='GameCreationSummary'>
				<div className="dualPanelHeader">
					<Titulo text={"GameQuiz"} />
				</div>
				<div className="dualPanelHeaderSubtitle">
					<h3 className="GameCreationSummarySubtitle">Resumen de Creación</h3>
				</div>
				<div className="dualPanelContainer" >
					<div className="dualPanelAreaLeft"  >
						<div className="dualPanelAreaLeftCover">
							<img className="questionCover" src={this.state.juego.settings.cover} alt="" />
						</div>
						<h3 className="GameCreationSummarySubtitle" >{this.state.juego.nombreJuego}</h3>
						{
							this.state.juego.settings.privacidad ? (
								<span className="GameCreationSummarySpan" >Privado</span>
							) : (
									<span className="GameCreationSummarySpan" >Publico</span>
								)
						}
						<button type="button" onClick={this.gameEnable}>Play</button>
					</div>
					<div className="dualPanelAreaRight" >
						<div className="dualPanelAreaRightTitle">
							<h3 className="GameCreationSummarySubtitle">Preguntas ({this.state.juego.preguntas.length})</h3>
						</div>
						{
							this.state.juego.preguntas.map((currElement, index) => (
								<QuestionThumbnailSlot key={index} index={index} question={currElement} />
							))
						}

					</div>
				</div>
			</div>
		);
	}
} export default GameCreationSummary;