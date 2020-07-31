import React, { Component } from 'react'
import Titulo from '../Titulo';
import { withRouter } from 'react-router-dom';

//export default class Tiempo extends Component {
class Tiempo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tiempo: this.props.time,
			stop: '',
			t: '',
			una: 0
		}
		this.stop = this.stop.bind(this);

	};

	stop() {
		clearTimeout(this.state.t);
		this.setState({ tiempo: 3 });
		this.setState({ stop: false });
		this.updateClock();
	}

	updateClock() {
		if (document.getElementById('tiempo') != null) {
			document.getElementById('tiempo').innerHTML = this.state.tiempo;
			if (this.state.tiempo == 0) {
				this.props.childFatherConn("");
				//console.log(this.state.tiempo);

				/*
				  repite de BtnSiguiente:
				  <Fragment>
				<Link to={{
					pathname: "/puntuacionparcial",
					isQuiz: { isQuiz: true, },
					respuestas: { respuestas: [25, 25, 25, 25] },
					pregunta: { numero: 1 },
					puntaje: { vale: "100 pts." },
					correcta: { correcta: "A" },
					maspreguntas: { maspreguntas: false }
				}}
					id="boton" className="button bloque" style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}
					onClick={this.props.stop}>Siguiente</Link>
			</Fragment>

				*/
				/*
				this.props.history.push({
					pathname: `/puntuacionparcial`, // si.. quedo pasamano
					isQuiz: { isQuiz: true, },
					respuestas: { respuestas: [25, 25, 25, 25] },
					pregunta: { numero: 1 },
					puntaje: { vale: "100 pts." },
					correcta: { correcta: "A" },
					maspreguntas: { maspreguntas: false }
				})

*/
			} else if (this.props.stop && this.state.una == 0) {
				this.setState({ una: 1 });
				this.stop()
			} else {
				const aux = this.state.tiempo - 1;
				this.setState({ tiempo: aux })
				return setTimeout(this.updateClock.bind(this), 1000);
			}
		}


	}

	componentDidMount() {
		this.setState({ t: this.updateClock() });
	}

	render() {
		return (
			<h3 id="tiempo" style={{
				display: "flex", border: "1px solid black",
				borderRadius: "50%", height: "50px", width: "50px", justifyContent: "center", alignItems: "center"
			}}></h3>
		)
	}

} export default withRouter(Tiempo)
