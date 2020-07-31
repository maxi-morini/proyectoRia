import React, { Component, Fragment } from 'react'
import Titulo from '../Titulo'
import Iniciado from './Iniciado';
import { Route, withRouter } from 'react-router-dom';

class Iniciar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gameplay: {
				juego: this.props.history.location.state.juego,
				currentQuestion: 0,
				questionCant: this.props.history.location.state.juego.preguntas,
				sumatoriaPuntos: 0,
				jugador: ''
			},
			totalTime: 5
		}
	};

	updateClock() {
		document.getElementById('espera').innerHTML = this.state.totalTime;
		if (this.state.totalTime == 0) {

			this.props.history.push({
				pathname: `/iniciado:${this.state.gameplay.jugador}`,
				gameplay: this.state.gameplay // si.. quedo pasamano
			})

		} else {
			const aux = this.state.totalTime - 1;
			this.setState({ totalTime: aux })
			setTimeout(this.updateClock.bind(this), 1000);
		}
	}

	onChange = e => {
		/*this.setState({
			[e.target.name]: e.target.value
		});*/
		e.persist();
		this.setState(prevState => ({
			gameplay: {
				...prevState.gameplay,
				[e.target.name]: e.target.value
			}
		}))
	}

	render() {
		return (
			<Fragment>
				<div className="columna" style={{ height: "100vh" }}>
					<Titulo text={"GameQuiz (Jugador)"} />
					<div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "flex-start", alignContent: "space-between", width: "100%" }}>
						<div style={{ display: "flex", flexFlow: "column wrap", height: "100%", width: "50%" }}>
							<h1 style={{ textAlign: "center" }}>{this.state.gameplay.juego.Nombre}</h1>

							<p>{this.state.gameplay.juego.Descripcion}</p>
						</div>
						<div style={{ heigth: "100", width: "33%", display: "flex", flexFlow: "row wrap", justifyContent: "flex-end", alignContent: "stretch" }}>
							<img className="questionCover" src={this.state.gameplay.juego.settings.coverImage} alt="" style={{width: "100%"}} />
						</div>


					</div>
					<input style={{ width: "80%", textAlign: "left" }} type="text" name="jugador" onChange={this.onChange} value={this.state.gameplay.jugador}
						placeholder="Nombre" />
					<button id="espera" className="button bloque" style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}
						onClick={this.updateClock.bind(this)}>Iniciar</button>
				</div>
			</Fragment>
		)
	}
}
export default withRouter(Iniciar)