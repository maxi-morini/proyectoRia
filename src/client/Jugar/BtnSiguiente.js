import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class BtnSiguiente extends Component {

    render() {
        return (
            <Fragment>
            <Link to={{pathname: "/puntacionparcial",
                        isQuiz: {isQuiz:true,},
                        respuestas:    {respuestas:[25,25,25,25]},
                        pregunta:{numero:1},
                        puntaje:{vale:"100 pts."},
                        correcta:{correcta:"A"},
                        maspreguntas:{maspreguntas:false}}} 
                id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
                onClick={this.props.stop}>Siguiente</Link>
            </Fragment>
        )
    }
}