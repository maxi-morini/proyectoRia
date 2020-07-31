import React, { Component } from 'react'
import Titulo from '../Titulo'
import LineaPunto from './LineaPunto'
import { Link } from 'react-router-dom';


export default class PuntuacionTotal extends Component {

	constructor(props) {
		super(props);
		this.state = { puntajes: [] };
	};

	async componentDidMount() {
		const url = "/api/puntajes";
		const response = await fetch(url);
		const data = await response.json();
		let puntos = data.filter(puntaje => puntaje.juego == this.props.location.juego.nombre);
		this.setState({ puntajes: puntos });
	}

	render() {
		const { puntajes } = this.state;
		return (
			<div className="columna" style={{ height: "100vh" }}>
				<Titulo text={"GameQuiz"} />
				<div id="puntos" className="columna" style={{ height: "50vh", overflowY: "scroll" }}>
					<table id="tabla" style={{ flexShrink: "inherit" }}>
						{this.state.puntajes.map(puntaje => <LineaPunto puntaje={puntaje} />)}
					</table>
				</div>
				<Link to="/" className="button bloque-auto" style={{ border: "2px solid black", fontSize: "3vw" }}>Fin</Link>
			</div>
		)
	}
}
