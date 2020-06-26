import React from 'react';

import GameCreationPanel from './GameCreationPanel.js';
import GameCreationQuestionThumbnail from './GameCreationQuestionThumbnail.js';

class GameCreation extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state = { nombreJuego: "" };

		this.nombreJuegoOnChange = this.nombreJuegoOnChange.bind(this); // cosas de ES6..
	}

	nombreJuegoOnChange(event) {
		this.setState({ nombreJuego: event.target.value });	
	}

	render() {

		return (
			<div className='GameCreation'>

				<div className='GameCreationHeader' style={{ widht: "100%", display: "flex", backgroundColor: "lightblue", textAlign: "left", marginBottom: "1em" }} >
					<div className='marginLeftBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }}></div>
					<input type="text" name="name" placeholder="Nombre?" onClick={this.nombreJuegoOnClick} onChange={this.nombreJuegoOnChange} /*style={{marginLeft: "5%"}}*/ />
					<button type="button" style={{ marginLeft: "1%" }} >Settings</button>
				</div>


				<div className='leftPanel' style={{ widht: "20%", display: "flex", backgroundColor: "red", float: "left" }} >
					<div className='marginLeftBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }}></div>
					<div className='leftPanelList' style={{ backgroundColor: "yellow", textAlign: "center", minHeight: "16em" }} >
						<div className='marginUp' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
						<span style={{}} >Tablero de Preguntas</span>
						<div className='leftPanelListQuestion' style={{ width: "12em", /*minHeight: "16em",*/  maxHeight: "75vh", display: "flex",  flexDirection: 'column', alignItems: "center", overflowY: "auto"}}>
							{/* each question */}
							<GameCreationQuestionThumbnail/>
							<GameCreationQuestionThumbnail/>
							<GameCreationQuestionThumbnail/>
							<GameCreationQuestionThumbnail/>



						</div>
						<div className='marginTop' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
						<div className='leftPanelListNew' style={{}}>
							<button type="button">Nueva Pregunta</button>
						</div>
						<div className='marginBottom' style={{ width: "1em", height: "1em"/*,  backgroundColor: "red"*/ }} />
					</div>
				</div>


		<div className='rightPanelContainer' style={{ width: "78%", minWidht: "70em", backgroundColor: "#194D33", float: "right"/*, display: "flex"*/ }}>
					<GameCreationPanel/>
				</div>

				<div className='rightEnd' style={{ display: "flex", flexDirection: 'row-reverse', width: "100%", textAlign: "right", minHeight: "1em", backgroundColor: "blue", float: "right" }}>
					<div className='marginRightBlock' style={{ width: "3em", height: "1em"/*,  backgroundColor: "red"*/ }} />
					<button type="button">Fin</button>

				</div>

			</div>



		);
	}

	//} export default withRouter(GameCreation);
} export default GameCreation;