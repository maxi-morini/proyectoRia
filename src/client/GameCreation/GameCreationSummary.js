import React from 'react';

class GameCreationSummary extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
	}

	render() {
		//console.log(this.props);
		return (
			<div className='GameCreationSummary' style={{ float: "right", marginBottom: "1em", marginTop: "1em", minWidth: "6em", minHeight: "6em", backgroundColor: "#c27939" }} >
				<div style={{}} >
					<span> {this.props.tiempo} s</span>
					<span> {this.props.tipoPregunta}</span>
				</div>
			</div>
		);
	}
} export default GameCreationSummary;