import React from 'react';

import './DualPanel.css';

const initialStateTest =
{
	"key": 0,
	"nombreJuego": "asdasd",
	"settings": {
		"descripcion": "asdasd",
		"privacidad": false,
		"password": "sd2111"
	},
	"preguntas": [
		{
			"show": false,
			"selectedAnswers": "quiz",
			"tiempo": "12",
			"pregunta": "asdasdsad",
			"posibleAnswers": {
				"correctAnswer": "quizC",
				"options": {
					"quizAText": "sdaaa",
					"quizBText": "sd",
					"quizCText": "aaaa",
					"quizDText": "sda"
				}
			},
			"selectedVideo": "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
			"puntos": "21",
			"key": 1
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
			"selectedVideo": "https://www.youtube-nocookie.com/embed/dGcsHMXbSOA?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=6&end=8",
			"puntos": "5",
			"key": 2
		}
	],
	"directLink": "LruyZyIxqrGkqiht6eSbqYOXQU0uhJVX88k"
}

class QuestionThumbnailSlot extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let someJSX = (
			<div className="questionThumbnailSlot" style={{}} >
				{this.props.index + 1}
				{this.props.question.selectedAnswers}
				{this.props.question.pregunta}

				{// https://img.youtube.com/vi/yy8aprH0ceE/2.jpg
					/*	https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=812
					
									https://img.youtube.com/vi/yy8aprH0ceE/0.jpg
									https://img.youtube.com/vi/yy8aprH0ceE/1.jpg
									https://img.youtube.com/vi/yy8aprH0ceE/2.jpg
									https://img.youtube.com/vi/yy8aprH0ceE/3.jpg
									https://img.youtube.com/vi/yy8aprH0ceE/0.jpg
									width="500" height="600"
					 */
				}

				{/* <img src="https://img.youtube.com/vi/{this.props.question.videoDataYT.videoID}/1.jpg" alt="" /> */}
				<img src="https://img.youtube.com/vi/yy8aprH0ceE/1.jpg" alt=""  />
				{this.props.question.tiempo}

			</div>
		);
		return someJSX;
	}
}

class GameCreationSummary extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state.juego = initialStateTest;

		this.gameEnable = this.gameEnable.bind(this);
	}

	gameEnable() {

	}

	/*
		titulo
		izq
		img cover
		cant jugados
		cant jugadores
		publico / privado

		play

		bar separation

		der
		preguntas (cant)
			list preguntas
	*/
	render() {
		//console.log(this.props);
		/*
		.panelHeader .dualPanelContainer .dualPanelAreaRight .dualPanelAreaLeft  .panelFooter {
	<span> {this.props.tiempo} s</span>
	<span> {this.props.tipoPregunta}</span>
		*/
		return (
			<div className='GameCreationSummary' style={{
				/*float: "right", marginBottom: "1em", marginTop: "1em", minWidth: "6em", minHeight: "6em", backgroundColor: "#c27939" */
			}} >
				<div className="panelHeader" style={{}} >
					<h2>GameQuiz</h2>
				</div>
				<div className="dualPanelContainer" style={{}} >
					<div className="dualPanelAreaLeft" style={{}} >

						<h2>{this.state.juego.nombreJuego}</h2>
						{
							this.state.juego.settings.privacidad ? (
								this.state.juego.preguntas
							) : (
									<span>Publico</span>
								)
						}
						<button type="button" onClick={this.gameEnable} style={{}}>Play</button>
					</div>
					<div className="dualPanelAreaRight" style={{}} >
						<h3>Preguntas({this.state.juego.preguntas.length})</h3>
						{
							this.state.juego.preguntas.map((currElement, index) => (
								<QuestionThumbnailSlot key={index} index={index} question={currElement} />
							))
						}

					</div>
				</div>
				<div className="panelFooter" style={{}} >
				</div>
			</div>
		);
	}
} export default GameCreationSummary;