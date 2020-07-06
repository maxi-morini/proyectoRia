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
				<ReactPlayer url={this.props.src} playing style={{ minHeight: "650px" }} />
			</div>
		);
	}
}

class GameCreationQuestionYoutubeLink extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }

		this.state = {
			videoDataYT: {
				videoID: "",
				videoPrettyLink: "",
				videoStart: "",
				videoEnd: "",
			}
		}

		this.state = { videoSelected: "" }
		this.state = { videoStartSelected: "" }
		this.state = { videoEndSelected: "" }
		this.state = { videoPrettyLink: "" }

		this.onChange = this.onChange.bind(this);
		this.videoReload = this.videoReload.bind(this);

		this.btnRemover = this.btnRemover.bind(this);
		this.btnCancel = this.btnCancel.bind(this);
		this.btnOK = this.btnOK.bind(this);
	}

	/*
		Recibe los tres parametros, como setState es async cada funcion Selection para el parametro a refrescar desde una variable interna a ellas.
		https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately
	*/
	videoReload(pVideo, pStartTime, pEndTime) {

		// Param & State Handling.
		if (typeof pVideo === "undefined" || pVideo === "") {
			pVideo = this.state.videoSelected;
		}
		if (typeof pStartTime === "undefined" || pStartTime === "") {
			pStartTime = this.state.videoStartSelected;
		}
		if (typeof pEndTime === "undefined" || pEndTime === "") {
			pEndTime = this.state.videoEndSelected;
		}

		// Retrieve Video ID
		if (typeof pVideo == "undefined" || pVideo === "") {
			this.setState({ videoPrettyLink: "" });
			this.setState({ videoSelected: "" });
			console.log("No es un link válido a un video de YouTube.");
			return;
		}
		let video_id = pVideo.split('v=')[1];
		if (typeof video_id == "undefined") {
			this.setState({ videoPrettyLink: "" });
			this.setState({ videoSelected: "" });
			console.log("No es un link válido a un video de YouTube.");
			return;
		}
		// Por si el link tiene mas parametros aparte del video ID.
		let ampersandPosition = video_id.indexOf('&');
		if (ampersandPosition !== -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}
		// una mas al final por las dudas
		if (typeof video_id == "undefined" || video_id === "") {
			this.setState({ videoSelected: "" });
			this.setState({ videoPrettyLink: "" });
			console.log("Error al conseguir ID del Video.");
			return;
		}

		// Armo los start y end times si existen.
		let startTime = "";
		if (typeof pStartTime !== "undefined" && pStartTime !== "") {
			startTime = "&start=" + pStartTime;
		}
		let endTime = "";
		if (typeof pEndTime !== "undefined" && pEndTime !== "") {
			endTime = "&end=" + pEndTime;
		}
		// Mayor Menor
		if (startTime !== "" && endTime !== "") {
			if (pStartTime > pEndTime) {
				console.log("Tiempo de inicio mayor al de fin: " + pStartTime + " - " + pEndTime);
				startTime = "";
				endTime = "";
				return;
			}
		}

		let pretyLink = "https://www.youtube-nocookie.com/embed/" + video_id + "?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1" + startTime + endTime;
		console.log(pretyLink);
		this.setState({ videoID: video_id });
		this.setState({ videoPrettyLink: pretyLink });
	}

	onChange = e => {
		let pVideo, pStartTime, pEndTime, targetID, targetValue;
		targetID = e.target.id;
		targetValue = e.target.value;

		if (typeof targetValue === "undefined") {
			targetValue = "";
		}

		if (targetID === "videoSelected") {
			pVideo = targetValue;
		} else if (targetID === "videoStartSelected") {
			pStartTime = targetValue;
		} else if (targetID === "videoEndSelected") {
			pEndTime = targetValue;
		}

		this.setState({
			[targetID]: targetValue
		})
		this.videoReload(pVideo, pStartTime, pEndTime);
	}

	btnRemover(event) {
		this.setState({ videoSelected: "" });
		this.setState({ videoStartSelected: "" });
		this.setState({ videoEndSelected: "" });
		this.setState({ videoPrettyLink: "" });
	}

	btnCancel(event) {

	}

	btnOK(event) {
		let returnData = {
			videoID: this.state.videoDataYT.videoID,
			videoPrettyLink: this.state.videoDataYT.videoPrettyLink,
			videoStart: this.state.videoDataYT.videoStart,
			videoEnd: this.state.videoDataYT.videoEnd,
		}
		this.props.onSelectVideo(this.state.videoPrettyLink);
	}

	render() {
		return (
			<div className="GameCreationQuestionYoutubeLink" style={{
				display: "flex", justifyContent: "space-between", flexWrap: "wrap"
			}} >
				<div className="areaLeft" style={{ flexDirection: "column", flexWrap: "no-wrap", maxWidth: "250px", textAlign: "left" }}>

					<label htmlFor="videoSelected">Link YouTube</label>
					<input type="text" id="videoSelected" placeholder="https://www.youtube.com/watch?" onChange={this.onChange} value={this.state.videoSelected} style={{
						minWidth: "25em"
					}} />

					<div className="videoStartSelected" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
						<label htmlFor="videoStartSelected">Inicio en:</label>
						<input type="text" id="videoStartSelected" placeholder="segundos" onChange={this.onChange} value={this.state.videoStartSelected} style={{
							minWidth: "6em"
						}} />
					</div>
					<div className="videoEndSelected" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
						<label htmlFor="videoEndSelected">Finaliza en:</label>
						<input type="text" id="videoEndSelected" placeholder="segundos" onChange={this.onChange} value={this.state.videoEndSelected} style={{
							minWidth: "6em"
						}} />
					</div>
				</div>
				<div className="areaRight" style={{}}>
					<div style={{ border: "4px solid red", minWidth: "950px", minHeight: "650px" }} >
						<VideoPlayer src={this.state.videoPrettyLink} />
					</div>
					<div className="remove" style={{}}>
						<input type="button" value="Remover" id="btnRemove" onClick={this.btnRemover} style={{ minWidth: "100px" }} />
					</div>
					<div className="controls" style={{}}>
						<input type="button" value="Cancelar" id="btnCancel" onClick={this.btnCancel} style={{ minWidth: "100px" }} />
						<input type="button" value="OK" id="btnOK" onClick={this.btnOK} style={{ minWidth: "100px" }} />
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