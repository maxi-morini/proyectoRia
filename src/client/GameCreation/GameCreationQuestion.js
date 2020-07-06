import React from 'react';
import GameCreationQuestionYoutubeLink from './GameCreationQuestionYoutubeLink.js';
import './Modal.css';

// Componente para Quiz
class Quiz extends React.Component {

	constructor(props) {
		super(props);
		this.state = { correctAnswer: "" }; /*{A, B, C, D}*/

		this.state = { quizAText: "" };
		this.state = { quizBText: "" };
		this.state = { quizCText: "" };
		this.state = { quizDText: "" };

		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(previousProps, previousState) {

		// infinite lOOOOP Protetor
		//console.log(previousProps);
		//console.log(previousProps.data, this.props.data, previousState);
		if (previousProps.data === this.props.data && previousState === this.state) {
			return;
		}

		// Manda la respuesta al padre.
		let posibleAnswers = {
			correctAnswer: this.state.correctAnswer,
			options: {
				quizAText: typeof this.state.quizAText === "undefined" ? "" : this.state.quizAText,
				quizBText: typeof this.state.quizBText === "undefined" ? "" : this.state.quizBText,
				quizCText: typeof this.state.quizCText === "undefined" ? "" : this.state.quizCText,
				quizDText: typeof this.state.quizDText === "undefined" ? "" : this.state.quizDText
			}
		}
		this.props.childFatherConnPanel(posibleAnswers);
	}

	onChange = e => {
		let targetID, targetValue;
		targetID = e.target.id;
		targetValue = e.target.value;
		if (targetID.length === 5) { // quizA en vez de quizAText 
			targetValue = targetID;
			targetID = "correctAnswer";
		}

		this.setState({
			[targetID]: targetValue
		})
	}

	render() {
		let someJSX = (
			<div className='answersQuiz'>
				<label>QUIZ</label>
				<table>
					<tbody>
						<tr>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizA" onChange={this.onChange} checked={this.state.correctAnswer === "quizA"} ></input>
									A
									<input type="text" id="quizAText" onChange={this.onChange} value={this.state.quizAText} ></input>
								</label>
							</td>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizB" onChange={this.onChange} checked={this.state.correctAnswer === "quizB"} ></input>
									B
									<input type="text" id="quizBText" onChange={this.onChange} value={this.state.quizBText}></input>
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizC" onChange={this.onChange} checked={this.state.correctAnswer === "quizC"} ></input>
									C
									<input type="text" id="quizCText" onChange={this.onChange} value={this.state.quizCText} ></input>
								</label>
							</td>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizD" onChange={this.onChange} checked={this.state.correctAnswer === "quizD"} ></input>
									D
									<input type="text" id="quizDText" onChange={this.onChange} value={this.state.quizDText}  ></input>
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
		return someJSX;
	}
}

// Componente para T/F
class TrueFalse extends React.Component {

	constructor(props) {
		super(props);
		this.state = { correctAnswer: "" }; /*{true, false}*/
		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(previousProps, previousState) {

		if (previousProps.data === this.props.data && previousState === this.state) {
			return;
		}

		// Manda la respuesta al padre.
		let posibleAnswers = {
			correctAnswer: this.state.correctAnswer,
			options: {
			}
		}
		this.props.childFatherConnPanel(posibleAnswers);
	}

	onChange = e => {
		let targetID, targetValue;
		targetID = e.target.id;
		targetValue = e.target.value;
		this.setState({ correctAnswer: targetID });
	}

	render() {
		let someJSX = (
			<div className='answersTruefalse'>
				<label>TRUE FALSE</label>
				<table>
					<tbody>
						<tr>
							<td>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="true" onChange={this.onChange} checked={this.state.correctAnswer === "true"} ></input>
									Verdadero
							</label>
							</td>
							<td>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="false" onChange={this.onChange} checked={this.state.correctAnswer === "false"} ></input>
									Falso
							</label>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
		);
		return someJSX;
	}
}

class GameCreationQuestion extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }

		this.state = { pregunta: "" };
		this.state = { tiempo: "" };
		this.state = { puntos: "" };

		// Estado para controlar los radiobutton, tambien define el tipo de respuesta: {quiz, truefalse}
		this.state = { selectedAnswers: "quiz" };

		//Rrespuestas Posibles 
		this.state = {
			posibleAnswers: {
				correctAnswer: this.state.correctAnswer,
				options: {
				}
			}
		};

		// Respuesta General, la correcta.
		this.state = { selectedAnswer: "" }; /*{A, B, C, D, T, F}*/

		// Para TrueFalse, solo se necesita guardar en selectedAnswer T o F.
		// Estados de Quiz, el texto de pregunta.

		// Video de la pregunta
		this.state = { selectedVideo: "" };

		// Control de Modal para el video
		this.state = { show: false }; // modal test 
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);

		// Onchange de los RadioButton Quiz/TF
		this.handleQuestion = this.handleQuestion.bind(this); // cosas de ES6..
		this.answersQuiz = this.answersQuiz.bind(this); // cosas de ES6..
		this.answersTF = this.answersTF.bind(this); // cosas de ES6..

		//Bind de Agergrar Pregunta. La manda al padre.
		this.agregarPregunta = this.agregarPregunta.bind(this);
	}

	// Son los datos desde el child correspondiente a Quiz
	handleQuestion = (payload) => {
		this.setState({ posibleAnswers: payload });
	}

	componentDidMount() {
		this.setState({ selectedAnswers: "quiz" });
	}

	agregarPregunta() {

		let question = {
			key: 0,
			pregunta: this.state.pregunta,
			tiempo: this.state.tiempo,
			tipoPregunta: this.state.selectedAnswers,
			puntos: this.state.puntos,
			posibleAnswers: this.state.posibleAnswers,
			linkVideo: this.state.selectedVideo
		};
		//console.log(question);
		this.props.childFatherConn(this.state);
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	// Onchange de los RadioButton Quiz/TF
	answersQuiz() {
		this.setState({ selectedAnswers: "quiz" });
	};

	// Onchange de los RadioButton Quiz/TF
	answersTF() {
		this.setState({ selectedAnswers: "truefalse" });
	};

	onChangePregunta = (event) => {
		this.setState({ pregunta: event.target.value });
	};
	onChangeTiempo = (event) => {
		this.setState({ tiempo: event.target.value });
	};
	onChangePuntos = (event) => {
		this.setState({ puntos: event.target.value });
	};

	handleVideoLink = (videoLink) => {
		this.setState({ selectedVideo: videoLink });
		this.hideModal();
	}

	render() {
		const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";
		const answerType = this.state.selectedAnswers;

		return (
			<div>
				<div className='GameCreationPanel'>

					<div className='rightQuestionHeader' style={{ width: "100%", textAlign: "center" }} >
						<input type="text" name="pregunta" placeholder="Pregunta?" onChange={this.onChangePregunta } style={{ width: "22em" }} />
					</div>

					<div className='rightQuestionLeft' style={{ float: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "9em", minHeight: "50vh", textAlign: "right" }}  >
						<div style={{ display: "block" }}>
							<div>
								<input type="text" name="tiempo" placeholder="Tiempo?" onChange={this.onChangeTiempo } />
								<input type="text" name="puntos" placeholder="Puntos?" onChange={this.onChangePuntos } />
							</div>
						</div>
						<div style={{ display: "block" }}>
							<div style={{ textAlign: "left", display: "flex", flexDirection: 'column' }}>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="quiz" name="quiz" onChange={this.answersQuiz} checked={this.state.selectedAnswers === "quiz"} >{/* ABCD */}</input>
									quiz
							</label>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="truefalse" name="truefalse" onChange={this.answersTF} checked={this.state.selectedAnswers === "truefalse"} >{/* T/F */}</input>
									truefalse
							</label>
							</div>
						</div>
					</div>

					<div className='rightQuestionRight' style={{ float: "right", minWidth: "29em", minHeight: "8em", maxWidth: "28em", backgroundColor: "lightblue", textAlign: "center" }} >
						{ /*<div className='rightQuestionRight' style={{ backgroundColor: "lightblue", textAlign: "center" }} >*/}

						<div style={{ width: "14em", height: "8em", backgroundColor: "green", textAlign: "center" }}>

							<div className='rightQuestionRightImagen' style={{ minWidth: "8em", minHeight: "8em", backgroundColor: "green", textAlign: "center" }}>
								{/* imagen */}
							</div>

							<div>
								<div className='rightQuestionRightUpload' style={{ float: "left" }}>
									<button type="button">Upload</button>
								</div>
								<div className='rightQuestionRightLink' onClick={this.showModal} style={{ float: "right " }}>
									<button type="button">Link</button>
								</div>
							</div>
							<div className='rightQuestionRightFoot' style={{ display: "inline-block" }}>

								{answerType === 'quiz' ? (
									<Quiz childFatherConnPanel={this.handleQuestion} posibleAnswers={this.posibleAnswers} />
								) : answerType === 'truefalse' ? (
									<TrueFalse childFatherConnPanel={this.handleQuestion} posibleAnswers={this.posibleAnswers} />
								) : null}

								{/*this.state.answers*/}

							</div>
						</div>
					</div>

					<div className='rightQuestionHeader' onClick={this.agregarPregunta} style={{ width: "100%", textAlign: "center" }} >
						<button type="button">Agregar</button>
					</div>

				</div>
				<div className={showHideClassName}>
					<section className="modal-main">
						<GameCreationQuestionYoutubeLink onSelectVideo={this.handleVideoLink} />
						{/*children*/}
						{/*<button onClick={handleClose}>close</button>*/}
					</section>
				</div>
			</div>
		);
	}

} export default GameCreationQuestion;