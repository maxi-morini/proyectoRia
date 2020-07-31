import React, { Component, Fragment } from 'react'
import PuntuacionParcialTF from './PuntuacionParcialTF'
import PuntuacionParcialQuiz from './PuntuacionParcialQuiz'

import Titulo from '../Titulo';
import { Link } from 'react-router-dom';
export default class PuntuacionParcial extends Component {


	QuizORTF = () => {
		const isQuiz = this.props.location.isQuiz.isQuiz;
		if (isQuiz) {
			return <PuntuacionParcialQuiz respuestas={this.props.location.respuestas.respuestas} />
		} else {
			return <PuntuacionParcialTF respuestas={this.props.location.respuestas.respuestas} />
		}
	}

	// terminar = () =>{
	//     if(this.props.location.maspreguntas.maspreguntas){
	//         document.getElementById("link").innerHTML =
	//         <Link to={{pathname: "/puntacionparcial",
	//         isQuiz: {isQuiz:true,},
	//         respuestas:    {respuestas:[25,25,25,25]},
	//         pregunta:{numero:1},
	//         puntaje:{vale:"100 pts."},
	//         correcta:{correcta:"A"}}} 
	//             id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
	//         >Siguiente</Link>
	//     }else{
	//         document.getElementById("link").innerHTML = <Link to={{pathname: "/puntaje",nombre: {nombre:this.props.jugador},puntaje:{puntaje:"100"}}}id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
	//         >Terminar</Link>
	//     }
	// }

	render() {
		return (
			<Fragment>
				<div style={{ height: "90vh" }}>
					<Titulo text={"GameQuiz"} />
					<Titulo text={"Pregunta " + this.props.location.pregunta.numero} />
					<h1>{this.props.location.puntaje.vale}</h1>
					<div className="contenedor" style={{ flexFlow: "row wrap", width: "70%", height: "50%" }}>
						<this.QuizORTF />
					</div>
					<div id="link">
						<Link to={{
							pathname: "/puntaje", nombre: { nombre: this.props.jugador }, puntaje: { puntaje: "100" },
							juego: { nombre: "AnimalesQuiz" }
						}} id="boton" className="button bloque"
							style={{ border: "2px solid black", height: "25%", fontSize: "3vw" }}>
							Terminar</Link>
					</div>
				</div>
			</Fragment>
		)
	}
}