import React from 'react';
import './GameCreationSettings.css';

/*var testPropsSettings = {
	"descripcion": "Soy una descripcion larga.",
	"privacidad": false,
	"password": "1234",
	"coverImage": "https://images7.memedroid.com/images/UPLOADED364/5edf22bcac059.jpeg",
	musica: ""
}*/

class GameCreationSettings extends React.Component {

	constructor(props) {

		super(props);

		this.myRefAudioControl = React.createRef();

		this.state = {
			settings: {
				descripcion: "",
				privacidad: false,
				password: "",
				coverImage: "",
				musica: ""
			}
		};

		/*
		this.state = {
			settings: testPropsSettings
		};*/

		this.btnOK = this.btnOK.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onChangeMusicSelector = this.onChangeMusicSelector.bind(this);
	}

	onChangeMusicSelector(e) {
		let selected = e.target.value;
		let setThisOne = "";

		switch (selected) {
			case "pillarOfCreation":
				setThisOne = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/suRRism-Phonoethics/Ambient_Fabric/Classwar_Karaoke_-_0028_Survey/Ambient_Fabric_-_07_-_Pillars_of_Creation.mp3";
				break;
			case "mementoMori":
				setThisOne = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Abishai/Memento_Mori/Abishai_-_08_-_Ambient_Piece_4_02-13-2017.mp3";
				break;
			case "tuscanSun":
				setThisOne = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Ambient_Atmospheres/Chad_Crouch_-_Tuscan_Sun.mp3";
				break;
			case "pathOfTotality":
				setThisOne = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Soularflair/CUES_for_film_TV_games_etc_EPIC/Soularflair_-_02_-_Cue_1_-_Epic-Spacious-Ambient-Drone_In_the_Path_Of_Totality.mp3";
				break;
			case "none":
				setThisOne = "";
				break;
			default:
				setThisOne = "";
				break;
		}

		this.setState(prevState => ({
			settings: {
				...prevState.settings,
				musica: setThisOne
			}
		}));

		this.setState({ isPlaying: setThisOne }, function () {
			this.refs.myRefAudioControl.pause();
			this.refs.myRefAudioControl.load();
			this.refs.myRefAudioControl.play();
		})

	}

	onChange = e => {
		let targetID, targetValue, targetName;
		targetID = e.target.id;
		targetValue = e.target.value;
		targetName = e.target.name;

		if (targetID === "juegoPublico") {
			targetValue = false;
		} else if (targetID === "juegoPrivado") {
			targetValue = true;
		}

		this.setState(prevState => ({
			settings: {
				...prevState.settings,
				[targetName]: targetValue
			}
		}));
	}

	btnOK(event) {
		this.refs.myRefAudioControl.pause();
		this.props.childFatherConnSettings(this.state.settings);
		//console.log(this.state.settings);
	}

	render() {
		return (
			<div className="gameCreationQuestionYoutubeLink">

				<div className="gameCreationQuestionYoutubeLinkSubtitle">
					<h3>Carga de Imagen</h3>
				</div>

				<div className="areaLeft" >


					<div className="gameCreationQuestionYoutubeLinkVideoSelected">
						{/*<label htmlFor="titulo">Titulo</label>*/}
						<label id="titulo" placeholder="Titulo">{this.props.titulo}</label>
					</div>

					<div className="gameCreationQuestionYoutubeLinkVideoSelected">
						<label htmlFor="descripcionJuego">Descripcion</label>
						<input type="text" id="descripcionJuego" name="descripcion" onChange={this.onChange} value={this.state.settings.descripcion} placeholder="Descripcion" />
					</div>

					<div className="gameCreationSettingsConf" >
						<div className="gameCreationSettingsConfRadios">
							<div className="gameCreationSettingsConfRadio">
								<label htmlFor="juegoPublico" >Publico</label>
								<input type="radio" id="juegoPublico" name="privacidad" onChange={this.onChange} checked={this.state.settings.privacidad === false} />
							</div>
							<div className="gameCreationSettingsConfRadio">
								<label htmlFor="juegoPrivado" >Privado</label>
								<input type="radio" id="juegoPrivado" name="privacidad" onChange={this.onChange} checked={this.state.settings.privacidad === true} />
							</div>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="password" id="password" name="password" onChange={this.onChange} value={this.state.settings.password} />
						</div>
					</div>

				</div>

				<div className="areaRight" >
					<div className="gameCreationSettingsIMG"  >
						<label htmlFor="imgURL" >URL a la Imagen</label>
						<input type="text" id="imgURL" name="coverImage" onChange={this.onChange} value={this.state.settings.coverImage} />
						<img id="imgURLdisplay" src={this.state.settings.coverImage} />
					</div>
					<div className="gameCreationSettingsAudio" >
						<label htmlFor="musics">Música de Ambiente:</label>

						<select name="musicSelector" onChange={this.onChangeMusicSelector} id="musics">
							<option value="none">Ninguna</option>
							<option value="pillarOfCreation">Pillar of Creation</option>
							<option value="mementoMori">Memento Mori</option>
							<option value="tuscanSun">Tuscan Sun</option>
							<option value="pathOfTotality">Path of Totality</option>
						</select>

						<audio controls ref="myRefAudioControl">
							<source src={this.state.settings.musica} type="audio/mpeg" />
						</audio>

					</div>


					<div>
						<input type="button" value="OK" id="btnOK" onClick={this.btnOK} style={{ minWidth: "100px" }} />
					</div>
				</div>

			</div >
		);
	}

} export default GameCreationSettings;