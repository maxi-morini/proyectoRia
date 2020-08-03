import React, { Component, Fragment } from 'react'
import Titulo from './Titulo'
import ElegirxCodigo from './Jugar2/ElegirxCodigo'
import ElegirxSeleccion from './Jugar2/ElegirxSeleccion';
import { withRouter } from 'react-router-dom';
//import Iniciar from './Jugar/Iniciar'


class Jugar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"juego": '',
			"juegos": [],
			elegidoActual: "",
			password: ""
		};
	};
	async componentDidMount() {
		const url = "/api/juegos";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ juegos: data });
	}

	onClick = (e) => {
		//this.props.history.push(`/iniciar:${this.state.juego.Nombre}`)
		
		var ajug = this.state.juego;
		console.log(ajug, this.state.password)

		if (ajug.settings.privacidad) {
			if (ajug.settings.password === this.state.password) {
				if (ajug) {
					this.props.history.push({
						pathname: '/iniciar',
						state: { juego: this.state.juego }
					})
				} else {
					return;
				}
			} else {
				/*
				const node = document.createElement("h1");
				const text = document.createTextNode("Pass incorrecto");
				node.setAttribute("id", "hijo")
				node.appendChild(text);
				form.appendChild(node);
				*/
			}
		}else{
			this.props.history.push({
				pathname: '/iniciar',
				state: { juego: this.state.juego }
			})
		}

		
	}

	elegido = (juego, pass) => {
		console.log("elegido deasde Jugar", juego, pass)
		this.setState({
				juego: juego,
				elegidoActual: juego.Nombre,
				password: pass
		});
	}

	render() {
		return (
			<Fragment>
				<div className="columna" style={{ width: "100vw", height: "100vh" }}>
					<Titulo text={this.props.text} />

					<ElegirxCodigo juegos={this.state.juegos} elegido={this.elegido} elegidoActual={this.state.elegidoActual} />
					<ElegirxSeleccion juegos={this.state.juegos} elegido={this.elegido} elegidoActual={this.state.elegidoActual}/>
					<button className="button bloque-auto" style={{ border: "2px solid black", width: "33%", alignSelf: "flex-end" }} onClick={this.onClick}>Iniciar</button>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Jugar);