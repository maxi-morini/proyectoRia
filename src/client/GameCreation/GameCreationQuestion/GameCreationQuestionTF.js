import React from 'react';
import './GameCreationQuestionTF.css';

class GameCreationQuestionTF extends React.Component {

	constructor(props) {

		super(props);

		/*this.state = {
			posibleAnswers: {
				correctAnswer: "",
				options: {
					quizAText: "",
					quizBText: "",
					quizCText: "",
					quizDText: ""
				}
			}
		};*/

		this.state = {
			posibleAnswers: {
				correctAnswer: ""
			}
		};

		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(previousProps, previousState) {

		if (previousProps.data === this.props.data && previousState === this.state) {
			return;
		}

		// Manda la respuesta al padre.
		this.props.childFatherConnPanel(this.state.posibleAnswers);
	}

	onChange = e => {
		e.persist();
		this.setState(prevState => ({
			posibleAnswers: {
				...prevState.posibleAnswers,
				correctAnswer: e.target.id
			}
		}))
	}

	render() {
		let someJSX = (

			<div className='gameCreationQuestion'>
				<div className='gameCreationQuestionSubtitle' >
					<label>TRUE/FALSE</label>
				</div>

				<div className='gameCreationQuestionTFOptions' >

					<div className='gameCreationQuestionTFOptionsItem' >
						<input type="radio" id="false" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "false"} />
						<label htmlFor="false">Falso</label>
					</div>

					<div className='gameCreationQuestionTFOptionsItem' >
						<input type="radio" id="true" onChange={this.onChange} checked={this.state.posibleAnswers.correctAnswer === "true"} />
						<label htmlFor="true">Verdadero</label>
					</div>

				</div>

			</div>
		);
		return someJSX;
	}

} export default GameCreationQuestionTF;