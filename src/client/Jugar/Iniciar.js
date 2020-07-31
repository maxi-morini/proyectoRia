import React, { Component, Fragment } from 'react'
import Titulo from '../Titulo'
import Iniciado from './Iniciado';
import { Route, withRouter } from 'react-router-dom';



class Iniciar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			juego: this.props.history.location.state.juego,
			name: '',
			totalTime: 5
		}

		/*this.state = {
			juego: this.props.history.location.state.juego
		};*/

	};


	updateClock() {
		document.getElementById('espera').innerHTML = this.state.totalTime;
		if (this.state.totalTime == 0) {
			//const concat = this.state.name.concat(":",this.state.juego.Nombre);
			// this.props.history.push(`/iniciado:${this.state.name}:${this.state.juego.Nombre}`)
			
			//this.props.history.push(`/iniciado:${this.state.name}:${this.state.juego.Nombre}`);

			this.props.history.push({
				pathname: `/iniciado:${this.state.name}`,
				state: { juego: this.state.juego } // si.. quedo pasamano
			})

		} else {
			const aux = this.state.totalTime - 1;
			this.setState({ totalTime: aux })
			setTimeout(this.updateClock.bind(this), 1000);
		}
	}

	//async componentDidMount() {
	componentDidMount() {
		/*
		//const { nombre } = this.props.match.params;
		let nombre  = "SoyUnJuego"; // test

		const url = "/api/juegos";
		const response = fetch(url);
		let data = response.json();
		data = data.filter(juego => juego.Nombre == nombre);
		data = data[0];
		//console.log(data);

		//const nom = nombre.substring(1);
		//this.setState({ juego: data.filter(juego => juego.Nombre == nom)[0] });
		this.setState({ juego: data });
		//console.log(data);
*/
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		//console.log(this.state); //test
		//console.log(this.props);

		return (
			<Fragment>
				<div className="columna" style={{ height: "100vh" }}>
					<Titulo text={"GameQuiz (Jugador)"} />
					<div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", alignContent: "space-between", width: "100%" }}>
						<div style={{ display: "flex", flexFlow: "column wrap", height: "100%", width: "50%" }}>
							<h1 style={{ textAlign: "center" }}>{this.state.juego.Nombre}</h1>

							<p>{this.state.juego.Descripcion}</p>
						</div>
						<div style={{ heigth: "100", border: "1px solid black", width: "33%", display: "flex", flexFlow: "row wrap", justifyContent: "flex-end", alignContent: "stretch" }}>
							Portada
							{/*
							{this.state.juego.Portada} questionCover en realidad es cover del juego
							*/}
							<img className="questionCover" src={this.state.juego.settings.coverImage} alt="" />

						</div>


					</div>
					<input style={{ width: "80%", textAlign: "left" }} type="text" name="name" onChange={this.onChange} value={this.state.name}
						placeholder="Nombre" />
					<button id="espera" className="button bloque" style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}
						onClick={this.updateClock.bind(this)}>Iniciar</button>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Iniciar)