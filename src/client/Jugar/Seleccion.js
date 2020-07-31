import React, { Component } from 'react'

export default class Seleccion extends Component {
	
	constructor(props) {
		super(props);
		//this.state = { selected: false};
	}


	onClick = (e) => {
		this.props.elegido(this.props.juego)
		//this.setState({selected: true});
	}

	render() {
		const { juego } = this.props;
		const { elegidoActual } = this.props;
		console.log(this.props);
		let elegirxSeleccionOption = "button elegirxSeleccionOption ";
		if(juego.Nombre === elegidoActual){
			elegirxSeleccionOption += "selected";
		}else{
			elegirxSeleccionOption += "selectedNot";
		}


		return (
			<div>
				<button className={elegirxSeleccionOption} onClick={this.onClick}>{juego.Nombre} ({juego.Preguntas})</button>
			</div>
		)
	}
}
