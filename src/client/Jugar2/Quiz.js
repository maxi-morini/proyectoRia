import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Quiz extends Component {

	constructor(props) {
		super(props);
		this.onClickTF = this.onClickTF.bind(this);
	};

	onClickTF(e) {
		this.props.childFatherConn(e.target.name);
	}

	render() {
		return (
			<div className="contenedor" style={{ width: "100%", height: "100%" }}>
				<div style={{ display: "flex", flexFlow: "column wrap", justifyContent: "space-between" }}>
					<div className="contenedor" style={{ width: "100%", height: "100%" }}>

						<button className="preguntas bloque-auto button" name="quizA" onClick={this.onClickTF}
							style={{ background: "blue", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
							A - Respuesta 1
           				 </button>
						<button className="preguntas bloque-auto button" name="quizB" onClick={this.onClickTF}
							style={{ background: "red", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
							B - Respuesta 2
           				 </button>
						<button className="preguntas bloque-auto button" name="quizC" onClick={this.onClickTF}
							style={{ background: "red", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
							C - Respuesta 3
           			 	</button>
						<button className="preguntas bloque-auto button" name="quizD" onClick={this.onClickTF}
							style={{ background: "red", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
							D - Respuesta 4
            			</button>
					</div>

					{/*
					<Link to={{
						pathname: "/puntuacionparcial",
						isQuiz: { isQuiz: true, },
						respuestas: { respuestas: [25, 25, 25, 25] },
						pregunta: { numero: 1 },
						puntaje: { vale: "100 pts." },
						correcta: { correcta: "A" },
						maspreguntas: { maspreguntas: false }
					}}
						className="preguntas bloque-auto button"
						style={{ background: "blue", border: "2px solid black", height: "25%", fontSize: "2vw" }}>
						A - Respuesta 1
                    </Link>
					<Link to={{
						pathname: "/puntuacionparcial",
						isQuiz: { isQuiz: true, },
						respuestas: { respuestas: [25, 25, 25, 25] },
						pregunta: { numero: 1 },
						puntaje: { vale: "100 pts." },
						correcta: { correcta: "A" },
						maspreguntas: { maspreguntas: false }
					}}
						className="preguntas bloque-auto button"
						style={{ background: "red", border: "2px solid black", height: "25%", fontSize: "2vw" }}>
						B - Respuesta 2
                    </Link>
				</div>
				<div style={{ display: "flex", flexFlow: "column wrap", justifyContent: "space-between" }}>
					<Link to={{
						pathname: "/puntuacionparcial",
						isQuiz: { isQuiz: true, },
						respuestas: { respuestas: [25, 25, 25, 25] },
						pregunta: { numero: 1 },
						puntaje: { vale: "100 pts." },
						correcta: { correcta: "A" },
						maspreguntas: { maspreguntas: false }
					}}
						className="preguntas bloque-auto button"
						style={{ background: "green", border: "2px solid black", height: "25%", fontSize: "2vw" }}>
						C - Respuesta 3
                    </Link>
					<Link to={{
						pathname: "/puntuacionparcial",
						isQuiz: { isQuiz: true, },
						respuestas: { respuestas: [25, 25, 25, 25] },
						pregunta: { numero: 1 },
						puntaje: { vale: "100 pts." },
						correcta: { correcta: "A" },
						maspreguntas: { maspreguntas: false }
					}}
						className="preguntas bloque-auto button"
						style={{ background: "purple", border: "2px solid black", height: "25%", fontSize: "2vw" }}>
						D - Respuesta 4
                    </Link>
					*/}
				</div>
			</div>
		)
	}
}
