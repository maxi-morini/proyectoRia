import React from 'react';

import './GameCreationQuestionQuiz.css';


/*
	posibleAnswers: {
		correctAnswer: "quizC",
		options: {
			quizAText: "sdaaa",
			quizBText: "sd",
			quizCText: "aaaa",
			quizDText: "sda"
		}
	},
*/
class GameCreationQuestionQuiz extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			posibleAnswers: {
				correctAnswer: "",
				options: {
					quizAText: "",
					quizBText: "",
					quizCText: "",
					quizDText: ""
				}
			}
		};

		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(previousProps, previousState) {

		// infinite lOOOOP Protetor
		if (previousProps.data === this.props.data && previousState === this.state) {
			return;
		}

		this.props.childFatherConnPanel(this.state.posibleAnswers);
	}

	onChange = e => {
		let targetID, targetValue;
		targetID = e.target.id;
		targetValue = e.target.value;
		if (targetID.length === 5) { // quizA en vez de quizAText 
			targetValue = targetID;
			this.setState(prevState => ({
				posibleAnswers: {
					...prevState.posibleAnswers,
					correctAnswer: targetValue
				}
			}))
		} else {
			this.setState(prevState => ({
				posibleAnswers: {
					...prevState.posibleAnswers,
					options: {
						...prevState.posibleAnswers.options,
						[targetID]: targetValue
					}
				}
			}))
		}
	}

	render() {
		let someJSX = (
			<div className='gameCreationQuestion'>
				<div className='gameCreationQuestionSubtitle' >
					<label>QUIZ</label>
				</div>
				<div className='gameCreationQuestionQuizOptions' >

					<div className='gameCreationQuestionQuizOptionsRow' >

						<div className='gameCreationQuestionQuizOptionsItem' >
							<input type="radio" id="quizA" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "quizA"} />
							<label htmlFor="quizA">A</label>
							<input type="text" id="quizAText" onChange={this.onChange} value={this.state.posibleAnswers.options.quizAText} />
						</div>

						<div className='gameCreationQuestionQuizOptionsItem' >
							<input type="radio" id="quizB" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "quizB"} ></input>
							<label htmlFor="quizB">B</label>
							<input type="text" id="quizBText" onChange={this.onChange} value={this.state.posibleAnswers.options.quizBText}></input>
						</div>
					</div>
					<div className='gameCreationQuestionQuizOptionsRow' >
						<div className='gameCreationQuestionQuizOptionsItem' >
							<input type="radio" id="quizC" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "quizC"} ></input>
							<label htmlFor="quizC">C</label>
							<input type="text" id="quizCText" onChange={this.onChange} value={this.state.posibleAnswers.options.quizCText} ></input>
						</div>

						<div className='gameCreationQuestionQuizOptionsItem' >
							<input type="radio" id="quizD" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "quizD"} ></input>
							<label htmlFor="quizD">D</label>
							<input type="text" id="quizDText" onChange={this.onChange} value={this.state.posibleAnswers.options.quizDText}  ></input>
						</div>
					</div>
				</div >
			</div >
		);
		return someJSX;
	}
} export default GameCreationQuestionQuiz;