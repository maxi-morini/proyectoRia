import React from 'react';

class GameCreationQuestionThumbnail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
	}

	render() {

		return (
			<div className='GameCreationQuestionThumbnail' style={{ float: "right", marginBottom: "1em", marginTop: "1em", minWidth: "6em", minHeight: "6em", backgroundColor: "#c27939" }} >
				<div style={{  }} >

				</div>
			</div>
		);
	}
} export default GameCreationQuestionThumbnail;