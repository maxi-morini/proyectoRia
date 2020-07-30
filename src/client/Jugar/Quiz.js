import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Quiz extends Component {
    render() {
        return (
            <div className="contenedor" style={{width:"100%",height:"100%"}}>
                <div style={{display:"flex", flexFlow:"column wrap" , justifyContent:"space-between"}}>
                    <Link to={{pathname: "/puntuacionparcial",
                        isQuiz: {isQuiz:true,},
                        respuestas:    {respuestas:[25,25,25,25]},
                        pregunta:{numero:1},
                        puntaje:{vale:"100 pts."},
                        correcta:{correcta:"A"},
                        maspreguntas:{maspreguntas:false}}}                    
                    className="preguntas bloque-auto button" 
                        style={{background:"blue",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            A - Respuesta 1
                    </Link>
                    <Link to={{pathname: "/puntuacionparcial",
                        isQuiz: {isQuiz:true,},
                        respuestas:    {respuestas:[25,25,25,25]},
                        pregunta:{numero:1},
                        puntaje:{vale:"100 pts."},
                        correcta:{correcta:"A"},
                        maspreguntas:{maspreguntas:false}}}
                        className="preguntas bloque-auto button" 
                        style={{background:"red", border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            B - Respuesta 2 
                    </Link>
                </div>
                <div style={{display:"flex", flexFlow:"column wrap" , justifyContent:"space-between"}}>
                    <Link to={{pathname: "/puntuacionparcial",
                        isQuiz: {isQuiz:true,},
                        respuestas:    {respuestas:[25,25,25,25]},
                        pregunta:{numero:1},
                        puntaje:{vale:"100 pts."},
                        correcta:{correcta:"A"},
                        maspreguntas:{maspreguntas:false}}} 
                    className="preguntas bloque-auto button" 
                        style={{background:"green", border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            C - Respuesta 3 
                    </Link>
                    <Link to={{pathname: "/puntuacionparcial",
                        isQuiz: {isQuiz:true,},
                        respuestas:    {respuestas:[25,25,25,25]},
                        pregunta:{numero:1},
                        puntaje:{vale:"100 pts."},
                        correcta:{correcta:"A"},
                        maspreguntas:{maspreguntas:false}}}
                            className="preguntas bloque-auto button" 
                        style={{background:"purple",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            D - Respuesta 4 
                    </Link>
                </div>
            </div>
            )
    }
}
