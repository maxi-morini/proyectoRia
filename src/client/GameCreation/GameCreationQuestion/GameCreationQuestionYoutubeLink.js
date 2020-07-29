import React from "react";
import ReactPlayer from "react-player"; //npm i react-player
import "./GameCreationQuestionYoutubeLink.css";

const testPropsYT = {
	videoID: "yy8aprH0ceE",
	videoLink: "https://www.youtube.com/watch?v=yy8aprH0ceE", // link "normal"
	videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
	videoStart: "5",
	videoEnd: "8",
	videoThumbBig: "https://img.youtube.com/vi/yy8aprH0ceE/0.jpg",
	videoThumbSmall: "https://img.youtube.com/vi/yy8aprH0ceE/1.jpg"
}

class VideoPlayer extends React.Component {
	/*
		this.videoMaker(this.videoSelection, this.videoStartSelection, this.videoEndSelection)
		<ReactPlayer url="https://www.youtube-nocookie.com/embed/7FG7nTUYowQ?controls=1&start=2053&end=2058" />
	*/
	constructor(props) {
		super(props);

		/*this.state = {
			playingVideo :true
		};*/
		//this.myRefAudioControl = React.createRef();
	}

	render() {
		return (
			<div >
				<ReactPlayer url={this.props.src} playing={this.props.playing} />
			</div>
		);
	}
}

class GameCreationQuestionYoutubeLink extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			videoDataYT: {
				videoID: "",
				videoLink: "",
				videoPrettyLink: "",
				videoStart: "",
				videoEnd: "",
				videoThumbnailBig: "",
				videoThumbnailSmall: ""
			},
			playingVideo: true
		}

		/*
		this.state = {
			videoDataYT: testPropsYT
		}
		*/

		this.onChange = this.onChange.bind(this);
		this.videoReload = this.videoReload.bind(this);
		this.videoClearStates = this.videoClearStates.bind(this);

		this.btnRemover = this.btnRemover.bind(this);
		this.btnCancel = this.btnCancel.bind(this);
		this.btnOK = this.btnOK.bind(this);

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		//console.log(this.state.videoDataYT);
		this.videoReload("", "", "");
	}

	videoClearStates() {
		this.setState({
			videoDataYT: {
				videoID: "",
				videoLink: "",
				videoPrettyLink: "",
				videoStart: "",
				videoEnd: "",
				videoThumbnailBig: "",
				videoThumbnailSmall: ""
			},
			playingVideo : false
		});
	}

	/*
		Recibe los tres parametros, como setState es async cada funcion Selection para el parametro a refrescar desde una variable interna a ellas.
		https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately
	*/
	videoReload(pVideo, pStartTime, pEndTime) {

		// Param & State Handling.
		if (typeof pVideo === "undefined" || pVideo === "") {
			pVideo = this.state.videoDataYT.videoLink;
		}
		if (typeof pStartTime === "undefined" || pStartTime === "") {
			pStartTime = this.state.videoDataYT.videoStart;
		}
		if (typeof pEndTime === "undefined" || pEndTime === "") {
			pEndTime = this.state.videoDataYT.videoEnd;
		}

		// Retrieve Video ID
		if (typeof pVideo == "undefined" || pVideo === "") {
			this.videoClearStates();
			console.log("No es un link válido a un video de YouTube.");
			return;
		}
		let video_id = pVideo.split('v=')[1];
		if (typeof video_id == "undefined") {
			this.videoClearStates();
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
			this.videoClearStates();
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

		let prettyLink = "https://www.youtube-nocookie.com/embed/" + video_id + "?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1" + startTime + endTime;

		this.setState({
			videoDataYT: {
				videoID: video_id,
				videoLink: "https://www.youtube.com/watch?v=" + video_id,
				videoPrettyLink: prettyLink,
				videoStart: pStartTime,
				videoEnd: pEndTime,
				videoThumbnailBig: "https://img.youtube.com/vi/" + video_id + "/0.jpg",
				videoThumbnailSmall: "https://img.youtube.com/vi/" + video_id + "/1.jpg",
			},
			playingVideo: true
		});

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

		this.setState(prevState => ({
			videoDataYT: {
				...prevState.videoDataYT,
				[targetID]: targetValue
			},
			playingVideo: false
		}))

		this.videoReload(pVideo, pStartTime, pEndTime);
	}

	btnRemover(event) {
		this.setState({
			videoDataYT:
			{
				videoID: "",
				videoLink: "",
				videoPrettyLink: "",
				videoStart: "",
				videoEnd: "",
				videoThumbnailBig: "",
				videoThumbnailSmall: ""
			},
			playingVideo: false
		});

	}

	btnCancel(event) {
		// 		:(

		this.setState(prevState => ({
			videoDataYT: {
				...prevState.videoDataYT
			},
			playingVideo: false
		}))

		this.props.onSelectVideo("");
	}

	btnOK(event) {
		//console.log(this.state.videoDataYT);

		this.setState(prevState => ({
			videoDataYT: {
				...prevState.videoDataYT
			},
			playingVideo: false
		}))

		this.props.onSelectVideo(this.state.videoDataYT);
	}

	render() {
		let someJSX = (
			<div className="gameCreationQuestionYoutubeLink">

				<div className="gameCreationQuestionYoutubeLinkSubtitle">
					<h3>Carga de Link a YouTube</h3>
				</div>

				<div className="areaLeft">

					<div className="gameCreationQuestionYoutubeLinkVideoSelected">
						<label htmlFor="videoSelected">Link YouTube</label>
						<input type="text" id="videoSelected" placeholder="https://www.youtube.com/watch?" onChange={this.onChange} value={this.state.videoDataYT.videoLink} />
					</div>
					<div className="gameCreationQuestionYoutubeLinkVideoTimeSelection">
						<div className="videoTimeSelectionContainer" >
							<label htmlFor="videoStartSelected">Inicio en:</label>
							<input type="text" id="videoStartSelected" className="videoTimeSelection" placeholder="segundos" onChange={this.onChange} value={this.state.videoDataYT.videoStart} />
						</div>
						<div className="videoTimeSelectionContainer">
							<label htmlFor="videoEndSelected">Finaliza en:</label>
							<input type="text" id="videoEndSelected" className="videoTimeSelection" placeholder="segundos" onChange={this.onChange} value={this.state.videoDataYT.videoEnd} />
						</div>
					</div>
				</div>

				<div className="areaRight" >
					<div className="videoPlayerWrapper" >
						<VideoPlayer src={this.state.videoDataYT.videoPrettyLink} playing={this.state.playingVideo} />
					</div>
					<div className="remove">
						<input type="button" value="Remover" id="btnRemove" onClick={this.btnRemover} />
					</div>
					<div className="controls">
						<input type="button" value="Cancelar" id="btnCancel" onClick={this.btnCancel} />
						<input type="button" value="OK" id="btnOK" onClick={this.btnOK} />
					</div>
				</div>

			</div >
		);
		return someJSX;
	}

} export default GameCreationQuestionYoutubeLink;
