import React from 'react';
import ReactPlayer from "react-player"; //npm i react-player

class VideoPlayer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		//{this.props.src}
		return (
			<div>
				<h4>{this.props.src}</h4>
				<ReactPlayer url={this.props.src} />
			</div>
		);
	}
}

class GameCreationQuestionYoutubeLink extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state = { videoSelected: "" }
		this.state = { videoStart: "" }
		this.state = { videoEnd: "" }

		this.videoSelection = this.videoSelection.bind(this);
		this.videoStartSelection = this.videoStartSelection.bind(this);
		this.videoEndSelection = this.videoEndSelection.bind(this);
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

	VideoMaker(videoSelection, videoStartSelection, videoEndSelection) {
		//let sauce1 = "https://www.youtube-nocookie.com/embed/7FG7nTUYowQ?controls=1&start=2053&end=2058";
		let sauce = this.videoSelection;
		//sauce = props.source;
		//https://www.youtube-nocookie.com/embed/7FG7nTUYowQ?controls=1&start=2053&end=2058
		let someJSX = (
			<iframe title="myFrame" width="560" height="315" src={sauce}
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen>
			</iframe>

		);
		return someJSX;
	}

	

	VideoPlayer() {

	}


	render() {


		return (
			<div className='GameCreationQuestionYoutubeLink' style={{
				display: "flex"
				/*float: "right", marginBottom: "1em", marginTop: "1em", minWidth: "6em", minHeight: "6em", backgroundColor: "#c27939"*/
			}} >
				<label htmlFor="ytlink">Link YouTube</label>
				<input type="text" id="ytlink" placeholder="https://www.youtube.com/watch?" onChange={this.videoSelection} style={{
					minWidth: "25em"
				}} />

				<label htmlFor="videoStart">Inicio en:</label>
				<input type="text" id="videoStart" placeholder="00:00:00" onChange={this.videoStartSelection} style={{
					minWidth: "6em"
				}} />

				<label htmlFor="videoEnd">Finaliza en:</label>
				<input type="text" id="videoEnd" placeholder="00:00:00" onChange={this.videoEndSelection} style={{
					minWidth: "6em"
				}} />





				<div style={{}} >
					<VideoPlayer src={this.state.videoSelected} />
					{/*this.videoMaker(this.videoSelection, this.videoStartSelection, this.videoEndSelection)*/}
						
					{/*<ReactPlayer url='https://www.youtube-nocookie.com/embed/7FG7nTUYowQ?controls=1&start=2053&end=2058' />*/}
				</div>
			</div>
		);
	}
} export default GameCreationQuestionYoutubeLink;
/*

*/