import React, { Component, Fragment } from 'react'
import Seleccion from './Seleccion'


export default class FormElegir extends Component {
	/*
		 constructor(props) {
			  super(props);
			  this.state = {
					seleccionCodigo: {
						link: "",
					password: ""
					}
			  }
		 };*/

	constructor(props) {
		super(props);
		this.state = {
			"link": "",
			"password": '',
			juego: '',
		}
	};


	onChange = e => {
		//e.pers
		this.setState({
			[e.target.name]: e.target.value,
		},
			() => {
				let ajug = this.props.juegos.find(
					juego => this.state.link == juego.directLink
				);
				//console.log(ajug);
				//console.log(this.state.link);

				if (ajug) {
					//this.props.elegido(ajug);
				} else {
					return;
				}


				if (ajug.privacidad) {
					if (ajug.password ===  this.state.password) {
						/*<Seleccion key={ajug.Nombre} juego={ajug} elegido={this.props.elegido} elegidoActual={this.props.elegidoActual} />*/
						if (ajug) {
							this.props.elegido(ajug, this.state.password);
						} else {
							return;
						}
					} else {
						const node = document.createElement("h1");
						const text = document.createTextNode("Pass incorrecto");
						node.setAttribute("id", "hijo")
						node.appendChild(text);
						form.appendChild(node);
					}
				} else {
					/*<Seleccion key={ajug.Nombre} juego={ajug} elegido={this.props.elegido} elegidoActual={this.props.elegidoActual} />*/
					if (ajug) {
						this.props.elegido(ajug, this.state.password);
					} else {
						return;
					}
				}



			}

		)
	}

	// }onChange={this.onChange} value={this.state.link}
	//onChange={this.onChange} value={this.state.pass}
	// onChange = e => {
	// 	this.setState(prevState => ({
	// 		seleccionCodigo: {
	// 			...prevState.seleccionCodigo,
	// 			[e.target.name]: e.target.value
	// 		}
	// 	}));
	// }

	render() {
		return (

			<Fragment>
				<input style={{ width: "100vw" }} type="text"
					name="link"
					onChange={this.onChange}
					value={this.state.link}
					placeholder="Join game (link)" />
				<input style={{ width: "40%", alignSelf: "flex-end" }} type="password"
					id="in"
					name="password"
					onChange={this.onChange}
					value={this.state.password}
					placeholder="Password" />
			</Fragment>
		)
	}
}
