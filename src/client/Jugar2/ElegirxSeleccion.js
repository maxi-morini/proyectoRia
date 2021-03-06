import React, { Component, Fragment } from 'react'
import Seleccion from './Seleccion'

export default class ElegirxSeleccion extends Component {
	
	constructor(props) {
		super(props);
		this.state = { filtro: "" }
	};

	filtro = e => {
		this.setState({
			[e.target.name]: e.target.value
		});

	}

	render() {
		const { juegos } = this.props;


		return (
			<Fragment>
				<input type="text" style={{ width: "40%", alignSelf: "flex-start" }} name="filtro" placeholder="Filtro" onChange={this.filtro} value={this.state.filtro} />
				<div style={{display: "flex", flexFlow: "row wrap", overflowX:"scroll"}}>
					{
						juegos.filter(
								juego => juego.Nombre.includes(this.state.filtro)
							).map(
								juego => <Seleccion key={juego.Nombre} juego={juego} elegido={this.props.elegido} elegidoActual={this.props.elegidoActual} />
						)
					}
				</div>
			</Fragment>
		)
	}
}
