import React from 'react';
import GameCreationQuestionYoutubeLink from './GameCreationQuestionYoutubeLink.js';
//import './Modal.css';
import './GameCreationQuestion.css';
import GameCreationQuestionQuiz from './GameCreationQuestionQuiz.js';
import GameCreationQuestionTF from './GameCreationQuestionTF.js';

var testPropsQuestion = {
	show: false,
	selectedAnswers: "quiz",
	tiempo: "12",
	pregunta: "asda sdsad  sdsad sdsadsdsad vsdsad sdsad sdsadsdsad vsdsad sdsad sdsadsdsad vsdsads dfgdfgse4t",
	posibleAnswers: {
		correctAnswer: "quizC",
		options: {
			quizAText: "sdaaa",
			quizBText: "sd",
			quizCText: "aaaa",
			quizDText: "sda"
		}
	},
	selectedVideo: {
		videoID: "yy8aprH0ceE",
		videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
		videoStart: "",
		videoEnd: "",

	},
	puntos: "21",
	key: 1
}

class GameCreationQuestion extends React.Component {

	constructor(props) {

		super(props);


		this.state = {
			show: false,
			question: {
				selectedAnswers: "",
				tiempo: "",
				pregunta: "",
				posibleAnswers: {
					correctAnswer: "",
					options: {
						quizAText: "",
						quizBText: "",
						quizCText: "",
						quizDText: ""
					}
				},
				selectedVideo: {
					videoID: "",
					videoPrettyLink: "",
					videoStart: "",
					videoEnd: ""
				},
				puntos: "",
				key: 0
			}
		};
		/*
		this.state = {
			show: false,
			question: testPropsQuestion
		};*/

		// Control de Modal para el video
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.onChangeAnswersQuiz = this.onChangeAnswersQuiz.bind(this);
		this.onChangeAnswersTF = this.onChangeAnswersTF.bind(this);
		this.handleQuestion = this.handleQuestion.bind(this);
		this.agregarPregunta = this.agregarPregunta.bind(this);

	}

	// Son los datos desde el child correspondiente a Quiz
	handleQuestion = (payload) => {
		this.setState(prevState => ({
			question: {
				...prevState.question,
				posibleAnswers: payload
			}
		}))
		//this.setState({ posibleAnswers: payload });
	}

	componentDidMount() {
		this.onChangeAnswersQuiz();

	}

	agregarPregunta() {
		this.props.childFatherConn(this.state.question);
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	onChangeAnswersQuiz() {
		this.setState(prevState => ({
			question: {
				...prevState.question,
				selectedAnswers: "quiz"
			}
		}))
	};

	onChangeAnswersTF() {
		this.setState(prevState => ({
			question: {
				...prevState.question,
				selectedAnswers: "truefalse"
			}
		}))
	};

	onChangePregunta = (event) => {
		event.persist();
		this.setState(prevState => ({
			question: {
				...prevState.question,
				pregunta: event.target.value
			}
		}))
		//this.setState({ pregunta: event.target.value });
	};

	onChangeTiempo = (event) => {
		event.persist();
		this.setState(prevState => ({
			question: {
				...prevState.question,
				tiempo: event.target.value
			}
		}))
		//this.setState({ tiempo: event.target.value });
	};

	onChangePuntos = (event) => {
		event.persist();
		this.setState(prevState => ({
			question: {
				...prevState.question,
				puntos: event.target.value
			}
		}))
	};

	handleVideoLink = (videoData) => {
		this.setState(prevState => ({
			question: {
				...prevState.question,
				selectedVideo: videoData
			}
		}))
		this.hideModal();
	}

	render() {
		let classNameContainerYTLink = "gameCreationQuestionContainerYTLink ";
		classNameContainerYTLink += this.state.show ? "modal modal-display-block" : "modal modal-display-none";
		let someJSX = (
			<div className='gameCreationQuestion'  >

				<div className='gameCreationQuestionMain'>

					<div className='gameCreationQuestionHeader'>
						<input type="text" name="pregunta" placeholder="Pregunta?" value={this.state.question.pregunta} onChange={this.onChangePregunta} />
					</div>

					<div className='gameCreationQuestionLeft'>

						<div className='gameCreationQuestionLeftTop'>
							<div className='gameCreationQuestionLeftTopItem'>
								<label htmlFor="tiempo">Tiempo</label>
								<input type="text" id="tiempo" name="tiempo" placeholder="Tiempo?" value={this.state.question.tiempo} onChange={this.onChangeTiempo} />
							</div>
							<div className='gameCreationQuestionLeftTopItem'>
								<label htmlFor="puntos">Puntos</label>
								<input type="text" id="puntos" name="puntos" placeholder="Puntos?" value={this.state.question.puntos} onChange={this.onChangePuntos} />
							</div>
						</div>

						<div className='gameCreationQuestionLeftBottom'>

							<div className='gameCreationQuestionLeftBottomItem' >
								<input type="radio" id="quiz" name="quiz" onChange={this.onChangeAnswersQuiz} checked={this.state.question.selectedAnswers === "quiz"} ></input>
								<label htmlFor="quiz">Quiz</label>
							</div>

							<div className='gameCreationQuestionLeftBottomItem' >
								<input type="radio" id="truefalse" name="truefalse" onChange={this.onChangeAnswersTF} checked={this.state.question.selectedAnswers === "truefalse"} ></input>
								<label htmlFor="truefalse">T/F</label>
							</div>

						</div>

					</div>

					<div className='gameCreationQuestionRight'  >


						<div className='gameCreationQuestionImageArea' >

							<div className='rightQuestionRightImagen' >
								<img className="rightQuestionRightImagenImg" src={"https://img.youtube.com/vi/" + this.state.question.selectedVideo.videoID + "/0.jpg"} alt="" />
							</div>
							<div className='rightQuestionRightImagenNo' >
								<div className='gameCreationQuestionUpload'>
									<button type="button">Upload</button>
								</div>
								<div className='gameCreationQuestionLink' onClick={this.showModal} >
									<button type="button">Link</button>
								</div>
							</div>
						</div>

						<div className='gameCreationQuestionAnswersArea' >

							{this.state.question.selectedAnswers === 'quiz' ? (
								<GameCreationQuestionQuiz childFatherConnPanel={this.handleQuestion} posibleAnswers={this.state.question.posibleAnswers} />
							) : this.state.question.selectedAnswers === 'truefalse' ? (
								<GameCreationQuestionTF childFatherConnPanel={this.handleQuestion} posibleAnswers={this.state.question.posibleAnswers} />
							) : null}

						</div>


					</div>

					<div className='gameCreationQuestionFoot' onClick={this.agregarPregunta} >
						<button type="button">Agregar</button>
					</div>

				</div>

				<div className={classNameContainerYTLink}>
					<section className="modal-main">
						<GameCreationQuestionYoutubeLink onSelectVideo={this.handleVideoLink} />
					</section>
				</div>

			</div>
		);

		return someJSX;

	}

} export default GameCreationQuestion;