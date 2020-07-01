import React from "react";
import ReactPlayer from "react-player"; //npm i react-player

class VideoPlayer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		//{this.props.src}
		return (
			<div style={{}} >
				{ /* <h4>{this.props.src}</h4> */} 
				<ReactPlayer url={this.props.src} />
			</div>
		);
	}
}

class GameCreationQuestionYoutubeLink extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }

		// lo que importa
		this.state = { videoSelected: "" }
		this.state = { videoStart: "" }
		this.state = { videoEnd: "" }

		this.videoSelection = this.videoSelection.bind(this);
		this.videoStartSelection = this.videoStartSelection.bind(this);
		this.videoEndSelection = this.videoEndSelection.bind(this);

		this.btnRemover = this.btnRemover.bind(this);
		this.btnCancel = this.btnCancel.bind(this);
		this.btnOK = this.btnOK.bind(this);
	}

	videoSelection(event) {
		this.setState({ videoSelected: event.target.value });
	}
	videoStartSelection(event) {
		this.setState({ videoStart: event.target.value });
	}
	videoEndSelection(event) {
		this.setState({ videoEnd: event.target.value });
	}

	btnRemover(event) {
		//this.setState({ videoEnd: event.target.value });
		this.setState({ videoSelected: "" });
		this.setState({ videoStart: "" });
		this.setState({ videoEnd: "" });
	}
	btnCancel(event) {
		//this.setState({ videoEnd: event.target.value });
		// remover + redireccion ? 
	}
	btnOK(event) {
		//this.setState({ videoEnd: event.target.value });
		// mandar a redux + redireccion
	}

	render() {
		return (
			<div className="GameCreationQuestionYoutubeLink" style={{
				display: "flex", justifyContent: "space-between", flexWrap: "wrap"
			}} >
				<div className="areaLeft" style={{ flexDirection: "column", flexWrap: "no-wrap", maxWidth: "250px", textAlign: "left" }}>

					<label htmlFor="ytlink">Link YouTube</label>
					<input type="text" id="ytlink" placeholder="https://www.youtube.com/watch?" onChange={this.videoSelection} style={{
						minWidth: "25em"
					}} />

					<div className="videoStart" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
						<label htmlFor="videoStart">Inicio en:</label>
						<input type="text" id="videoStart" placeholder="00:00:00" onChange={this.videoStartSelection} style={{
							minWidth: "6em"
						}} />
					</div>
					<div className="videoEnd" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
						<label htmlFor="videoEnd">Finaliza en:</label>
						<input type="text" id="videoEnd" placeholder="00:00:00" onChange={this.videoEndSelection} style={{
							minWidth: "6em"
						}} />
					</div>
				</div>
				<div className="areaRight" style={{}}>
					<div style={{ border: "4px solid red" }} >
						<VideoPlayer src={this.state.videoSelected} />
					</div>
					<div className="remove" style={{  }}>
						<input type="button" value="Remover" id="btnRemove" onClick={this.btnRemover} style={{minWidth: "100px"}} />
					</div>
					<div className="controls" style={{}}>
						<input type="button" value="Cancelar" id="btnCancel" onClick={this.btnCancel} style={{minWidth: "100px"}} />
						<input type="button" value="OK" id="btnOK" onClick={this.btnOK} style={{minWidth: "100px"}} />
					</div>


				</div>
			</div>
		);
	}
} export default GameCreationQuestionYoutubeLink;
/*
	this.videoMaker(this.videoSelection, this.videoStartSelection, this.videoEndSelection)
	<ReactPlayer url="https://www.youtube-nocookie.com/embed/7FG7nTUYowQ?controls=1&start=2053&end=2058" />
	// float: "right", marginBottom: "1em", marginTop: "1em", minWidth: "6em", minHeight: "6em", backgroundColor: "#c27939"
*/