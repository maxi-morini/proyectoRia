import React from 'react';

class GameCreationPanel extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state = { answers: "" };  /*estado para refrescar el html*/

		this.state = { selectedAnswers: "quiz" }; /*{quiz, truefalse}*/  /* estado para controlar los radiobutton*/
		this.state = { selectedAnswer: "" }; /*{A, B, C, D, T, F}*/

		this.state = { selectedAnswerQuizA: "" };
		this.state = { selectedAnswerQuizB: "" };
		this.state = { selectedAnswerQuizC: "" };
		this.state = { selectedAnswerQuizD: "" };

		this.answersQuiz = this.answersQuiz.bind(this); // cosas de ES6..
		this.answersTF = this.answersTF.bind(this); // cosas de ES6..

		this.answerSelectionQuiz = this.answerSelectionQuiz.bind(this);
		this.answerSelectionTF = this.answerSelectionTF.bind(this);

		this.saveAnswerQuizA = this.saveAnswerQuizA.bind(this);
		this.saveAnswerQuizB = this.saveAnswerQuizB.bind(this);
		this.saveAnswerQuizC = this.saveAnswerQuizC.bind(this);
		this.saveAnswerQuizD = this.saveAnswerQuizD.bind(this);
	}

	componentDidMount() {
		this.answersQuiz();
	}

	saveAnswerQuizA(event) {
		this.setState({ selectedAnswerQuizA: event.target.value });
	}
	saveAnswerQuizB(event) {
		this.setState({ selectedAnswerQuizB: event.target.value });
	}
	saveAnswerQuizC(event) {
		this.setState({ selectedAnswerQuizC: event.target.value });
	}
	saveAnswerQuizD(event) {
		this.setState({ selectedAnswerQuizD: event.target.value });
	}

//onChange={this.answerSelectionTF}



	answerSelectionQuiz(event) {
		
		//ya odio react
		this.setState({ selectedAnswer: event.target.name });
		//this.forceUpdate();
		this.answersQuiz();
		//this.forceUpdate();
		//this.setState(this.state);
//console.log(event);
//console.log(event.target);
		//this.setState({ selectedAnswer: event.target.name });
		//this.forceUpdate();
		this.answersQuiz();
		//this.forceUpdate();
		//this.setState(this.state);

		//*this.setState({ answers: this.state.answers });

	}

	answerSelectionTF(event) {
		this.setState({ selectedAnswer: event.target.name });
		this.answersTF();
	}

	answersQuiz() {
		let someJSX = (
			<div className='answersQuiz'>
				<label>QUIZ</label>
				<table>
					<tbody>
						<tr>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizA" name="quizA" onChange={this.answerSelectionQuiz} checked={this.state.selectedAnswer === "quizA"} ></input>
									A
									<input type="text" id="quizAText" name="quizA" onChange={this.saveAnswerQuizA} value={this.state.saveAnswerQuizA} ></input>
							</label>
							</td>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizB" name="quizB" onChange={this.answerSelectionQuiz} checked={this.state.selectedAnswer === "quizB"} ></input>
									B
									<input type="text" id="quizBText" name="quizB" onChange={this.saveAnswerQuizB} value={this.state.saveAnswerQuizB}></input>
							</label>
							</td>
						</tr>
						<tr>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizC" name="quizC" onChange={this.answerSelectionQuiz} checked={this.state.selectedAnswer === "quizC"} ></input>
									C
									<input type="text" id="quizCText" name="quizC" onChange={this.saveAnswerQuizC} value={this.state.saveAnswerQuizC} ></input>
							</label>
							</td>
							<td>
								<label style={{ /*display: "inline-block" */ }}>
									<input type="radio" id="quizD" name="quizD" onChange={this.answerSelectionQuiz} checked={this.state.selectedAnswer === "quizD"} ></input>
									D
									<input type="text" id="quizDText" name="quizD" onChange={this.saveAnswerQuizD} value={this.state.saveAnswerQuizD}  ></input>
							</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
		this.setState({ selectedAnswers: "quiz" });
		this.setState({ answers: someJSX });
	}

	answersTF() {
		let someJSX = (
			<div className='answersTruefalse'>
				<label>TRUE FALSE</label>
				<table>
					<tbody>
						<tr>
							<td>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="truefalseT" name="truefalseT" onChange={this.answerSelectionTF} checked={this.state.selectedAnswer === "truefalseT"} ></input>
									Verdadero
							</label>
							</td>
							<td>
								<label style={{ display: "inline-block" }}>
									<input type="radio" id="truefalseF" name="truefalseF" onChange={this.answerSelectionTF} checked={this.state.selectedAnswer === "truefalseF"} ></input>
									Falso
							</label>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
		);
		this.setState({ selectedAnswers: "truefalse" });
		this.setState({ answers: someJSX });
	}

	render() {

		return (
			<div className='GameCreationPanel'>

				<div className='rightQuestionHeader' style={{ width: "100%", textAlign: "center" }} >
					<input type="text" name="pregunta" placeholder="Pregunta?" style={{ width: "22em" }} />
				</div>

				<div className='rightQuestionLeft' style={{ float: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "9em", minHeight: "50vh", textAlign: "right" }}  >
					<div style={{ display: "block" }}>
						<div>
							<input type="text" name="tiempo" placeholder="Tiempo?" />
							<input type="text" name="puntos" placeholder="Puntos?" />
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
							<div className='rightQuestionRightLink' style={{ float: "right " }}>
								<button type="button">Link</button>
							</div>
						</div>
						<div className='rightQuestionRightFoot' style={{ display: "inline-block" }}>
							{this.state.answers}
						</div>
					</div>
				</div>

				<div className='rightQuestionHeader' style={{ width: "100%", textAlign: "center" }} >
					<button type="button">Agregar</button>
				</div>

			</div>
		);
	}

} export default GameCreationPanel;