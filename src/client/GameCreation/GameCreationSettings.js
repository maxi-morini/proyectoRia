import React from 'react';
import './Modal.css';

class GameCreationSettings extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
		this.state = { descripcionJuego: "" }
		this.state = { privacidad: false }


		this.state = { imagenUbicacion: "" }

		/*
		this.state = { imagen: {
			tipo: "",
			ubicacion: ""
		}}
*/
		this.btnOK = this.btnOK.bind(this);
		this.setPrivacy = this.setPrivacy.bind(this);
		this.setImage = this.setImage.bind(this);
		//this.imagenUbicacion = this.imagenUbicacion.bind(this);

	}
	componentDidMount() {
	}

	// Onchange de los RadioButton privacidad
	setPrivacy(e) {
		if (e.target.id === "juegoPublico") {
			this.setState({ privacidad: false });
		} else if (e.target.id === "juegoPrivado") {
			this.setState({ privacidad: true });
		}
	}

	setImage(e) {
		/*
		let tipo = "";
		if (e.target.id === "imgURL") {
			tipo = "URL";
		} else if (e.target.id === "imgPath") {
			tipo = "PATH";
		}
		let imagen: {
			tipo: tipo,
			ubicacion: e.target.value
		}*/
		this.setState({ imagenUbicacion: e.target.value});
	}

	onChange = e => {
		let targetID, targetValue;
		targetID = e.target.id;
		targetValue = e.target.value;
		this.setState({
			[targetID]: targetValue
		})
		//this.videoReload(pVideo, pStartTime, pEndTime);
	}

	btnOK(event) {
		let settings = {
			descripcion: this.state.descripcionJuego,
			privacidad: this.state.privacidad,
			password: this.state.password,
			imgCover: this.state.imgCover,
			musicaFondo: this.state.musicaFondo,
		};
		this.props.childFatherConnSettings(settings);
	}

	render() {
		/*
		input type="text" id="descripcion" placeholder="segundos" onChange={this.onChange} value={this.state.videoStartSelected} style={{}} />
		*/
		return (
			<div className="GameCreationSettings" style={{
				justifyContent: "space-between", flexWrap: "wrap"
			}} >


				<div className="areaLeft" style={{ flexDirection: "column", flexWrap: "no-wrap", maxWidth: "250px", textAlign: "left" }}>

					<label htmlFor="videoSelected">Titulo</label>
					<span id="titulo" > {this.props.titulo}</span>


					<label htmlFor="descripcionJuego">Descripcion</label>
					<input type="text" id="descripcionJuego" onChange={this.onChange} placeholder="Descripcion" style={{}} />

					<label htmlFor="juegoPublico" style={{}}>
						<input type="radio" id="juegoPublico" onChange={this.setPrivacy} checked={this.state.privacidad === false} >
						</input>
						Publico
					</label>

					<label htmlFor="juegoPrivado" style={{}}>
						<input type="radio" id="juegoPrivado" onChange={this.setPrivacy} checked={this.state.privacidad === true} >
						</input>
						Privado
					</label>

					<label htmlFor="password" style={{}}>
						<input type="password" id="password" onChange={this.onChange} value={this.state.password} style={{}} />
						Password
					</label>
				</div>

				<div className="areaRight" style={{}}>
					<div style={{}} >
						{/*imagen*/}
						<label htmlFor="imgURL" style={{}}>
							URL a la Imagen
							<input type="text" id="imgURL" onChange={this.setImage} value={this.state.imagenUbicacion} style={{}} />
						</label>
						<label htmlFor="imgURLdisplay" style={{}}>
							Imagen
							<img id="imgURLdisplay" src={this.state.imagenUbicacion} />
						</label>
					</div>
					<div style={{}} >
						{/*dropdown list box con musica*/}
					</div>
					<div style={{}} >
						<input type="button" value="OK" id="btnOK" onClick={this.btnOK} style={{ minWidth: "100px" }} />
					</div>
				</div>

			</div>
		);
	}
} export default GameCreationSettings;