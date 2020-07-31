import React, { Component, Fragment } from 'react'
import Titulo from './Titulo'
import ElegirxCodigo from './Jugar/ElegirxCodigo'
import ElegirxSeleccion from './Jugar/ElegirxSeleccion';
import { withRouter } from 'react-router-dom';
import Iniciar from './Jugar/Iniciar'


class Jugar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"juego": '',
			"juegos": [],
			elegidoActual: ""
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

		this.props.history.push({
			pathname: '/iniciar',
			state: { juego: this.state.juego }
		})
	}

	elegido = (juego) => {
		this.setState({
				juego: juego,
				elegidoActual: juego.Nombre
		});
	}

	render() {
		return (
			<Fragment>
				<div className="columna" style={{ width: "100%", height: "100vh" }}>
					<Titulo text={this.props.text} />

					<ElegirxCodigo juegos={this.state.juegos} />
					<ElegirxSeleccion juegos={this.state.juegos} elegido={this.elegido} elegidoActual={this.state.elegidoActual}/>
					<button className="button bloque-auto" style={{ border: "2px solid black", width: "33%", alignSelf: "flex-end" }} onClick={this.onClick}>Iniciar</button>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Jugar);