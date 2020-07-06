import React from 'react';
import './Modal.css';

import GameCreationSetttings from './GameCreationSettings.js';
import GameCreationQuestion from './GameCreationQuestion.js';
import GameCreationQuestionThumbnail from './GameCreationQuestionThumbnail.js';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { gameCreationSave } from '../redux/actions/GameCreationActions'; //../
import { gameCreationGetAll } from '../redux/actions/GameCreationActions';



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

	componentDidMount() {
		/*
        const {
            match: { params: { itemId } },
            findCurrentItem,
        } = this.props;
		*/
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
		console.log(juego);
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
		let gameSettingsClassName = this.state.gameSettingsShow ? "modal display-block" : "modal display-none";
		let rightPanelContainerClassName = this.state.questionCreationShow ? "display-block" : "display-none";
		rightPanelContainerClassName = "rightPanelContainer " + rightPanelContainerClassName;

		return (
			<div className='GameCreation'>

				<div className='GameCreationHeader' style={{ widht: "100%", display: "flex", backgroundColor: "lightblue", textAlign: "left", marginBottom: "1em" }} >
					<div className='marginLeftBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }}></div>
					<input type="text" name="name" placeholder="Nombre?" onClick={this.nombreJuegoOnClick} onChange={this.nombreJuegoOnChange} /*style={{marginLeft: "5%"}}*/ />
					<button type="button" onClick={this.gameSettingsShow} style={{ marginLeft: "1%" }} >Settings</button>
				</div>


				<div className='leftPanel' style={{ widht: "20%", display: "flex", backgroundColor: "red", float: "left" }} >
					<div className='marginLeftBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }}></div>
					<div className='leftPanelList' style={{ backgroundColor: "yellow", textAlign: "center", minHeight: "16em" }} >
						<div className='marginUp' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
						<span style={{}} >Tablero de Preguntas</span>
						<div className='leftPanelListQuestion' style={{ width: "12em", /*minHeight: "16em",*/  maxHeight: "75vh", display: "flex", flexDirection: 'column', alignItems: "center", overflowY: "auto" }}>
							{/* each question */}
							{
								this.state.preguntas.map((currElement, index) => (
									<GameCreationQuestionThumbnail key={index} tiempo={currElement.tiempo} tiempo={currElement.tiempo} />
								))
							}
						</div>
						<div className='marginTop' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
						<div className='leftPanelListNew' style={{}}>
							<button type="button" onClick={this.questionCreationShow} >Nueva Pregunta</button>
						</div>
						<div className='marginBottom' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
					</div>
				</div>
				<div className={rightPanelContainerClassName} style={{ width: "78%", minWidht: "70em", backgroundColor: "#194D33", float: "right"/*, display: "flex"*/ }}>
					<GameCreationQuestion childFatherConn={this.handleQuestionCreated} />
				</div>

				<div className='rightEnd' style={{ display: "flex", flexDirection: 'row-reverse', width: "100%", textAlign: "right", minHeight: "1em", backgroundColor: "blue", float: "right" }}>
					<div className='marginRightBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }} />
					<button type="button" onClick={this.terminarOnClick}>Fin</button>
				</div>

				<div className={gameSettingsClassName}>
					<section className="modal-main">
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
const mapStateToProps = state => ({
	gameCreationData: state.gameCreationCache
});

const mapDispatchToProps = { // es la subcripcion?
	gameCreationSave,
	gameCreationGetAll/*
		findResults,*/
};
//export default GameCreation;
/*export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(GameCreation)
);*/
export default connect(mapStateToProps, mapDispatchToProps)(GameCreation);