import React from 'react';
import '../Modal.css';
import './GameCreation.css';
import GameCreationSetttings from '../GameCreationSettings.js';
import GameCreationQuestion from '../GameCreationQuestion/GameCreationQuestion.js';
import QuestionThumbnailSquare from '../../QuestionThumbnail/QuestionThumbnailSquare.js';

/*
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
*/

class GameCreation extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" };

		// Game Creation Data
		this.state = { nombreJuego: "" };
		this.state = { gameSettings: {} }
		this.state = { gameSettingsShow: false }
		this.state = { questionCreationShow: false };
		this.state = { preguntas: [] }; // no declarar states abajo de esto que se muere el mapeo

		//Onchanges - Game Creation Data
		this.nombreJuegoOnChange = this.nombreJuegoOnChange.bind(this); // cosas de ES6..
		this.terminarOnClick = this.terminarOnClick.bind(this);

		// Panel Handling
		//this.state = { questionCreationShow: false }
		this.questionCreationShow = this.questionCreationShow.bind(this);
		this.questionCreationHide = this.questionCreationHide.bind(this);
		this.gameSettingsShow = this.gameSettingsShow.bind(this);
		this.gameSettingsHide = this.gameSettingsHide.bind(this);

		this.makeID = this.makeID.bind(this);

	}

	makeID(length) {
		let result = '';
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	terminarOnClick(event) {
		let link = this.makeID(35);
		let juego = {
			key: 0,
			nombreJuego: this.state.nombreJuego,
			settings: this.state.gameSettings,
			preguntas: this.state.preguntas,
			directLink: link
		};

		
		//console.log(juego);
		//this.props.childFatherConnSettings(settings);

		// Redirect to summary?

		/* // Cosas Redux 
		let state = this.props.gameCreationSave(this.state.nombreJuego);
		let state2 = this.props.gameCreationGetAll();
		*/
	}

	questionCreationShow = () => {
		this.setState({ questionCreationShow: true });
	};
	questionCreationHide = () => {
		this.setState({ questionCreationShow: false });
	};
	gameSettingsShow = () => {
		this.setState({ gameSettingsShow: true });
	};
	gameSettingsHide = () => {
		this.setState({ gameSettingsShow: false });
	};

	nombreJuegoOnChange(event) {
		this.setState({ nombreJuego: event.target.value });
	}

	handleQuestionCreated = (payload) => {
		payload.key = this.state.preguntas.length + 1;
		this.state.preguntas.push(payload)
		this.questionCreationHide();
	}

	handleSettingsCreated = (payload) => {
		this.setState({ gameSettings: payload });
		this.gameSettingsHide();
	}

	render() {
		let gameSettingsClassName = "gameCreationSettingsContainer ";
		gameSettingsClassName += this.state.gameSettingsShow ? "modal modal-display-block" : "modal modal-display-none";
		let rightPanelContainerClassName = "gameCreationRightPanelContainer "
		rightPanelContainerClassName += this.state.questionCreationShow ? "modal-display-block" : "modal-display-none";

		return (
			<div className='gameCreation'>

				<div className='gameCreationHeader' >
					<input className="gameCreationNombre" type="text" name="name" placeholder="Nombre?" onClick={this.nombreJuegoOnClick} onChange={this.nombreJuegoOnChange} />
					<button className="gameCreationSettings" type="button" onClick={this.gameSettingsShow}  >Settings</button>
				</div>

				<div className='gameCreationLeftPanel'  >
					<span className='gameCreationSpanSubtitle' >Tablero de Preguntas</span>
					<div className='gameCreationLeftPanelListQuestion'>
						{
							this.state.preguntas.map((currElement, index) => (
								<QuestionThumbnailSquare key={index}  question={currElement} />
							))
						}
					</div>
					<div className='gameCreationMarginTop' />
					<div className='gameCreationLeftPanelListNew' >
						<button className="gameCreationNewQuestionButton" type="button" onClick={this.questionCreationShow} >Nueva Pregunta</button>
					</div>
				</div>

				<div className={rightPanelContainerClassName} >
					<GameCreationQuestion childFatherConn={this.handleQuestionCreated} />
				</div>

				<div className='gameCreationFooter' >
					<button className='gameCreationTerminar' type="button" onClick={this.terminarOnClick}>Fin</button>
				</div>

				<div className={gameSettingsClassName}>
					<section className="gameCreationModalSection modal-main">
						<GameCreationSetttings
							childFatherConnSettings={this.handleSettingsCreated}
							titulo={this.state.nombreJuego}
						/>
						{/*onSelectVideo={this.handleVideoLink}*/}
					</section>
				</div>

			</div>
		);
	}
}
export default GameCreation;