import React, { Component } from 'react'

export default class Quiz extends Component {
    render() {
        return (
            <div className="contenedor" style={{width:"100%",height:"100%"}}>
                <div style={{display:"flex", flexFlow:"column wrap" , justifyContent:"space-between"}}>
                    <button className="preguntas bloque-auto button" 
                        style={{background:"blue",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            A - Respuesta 1
                    </button>
                    <button className="preguntas bloque-auto button" 
                        style={{background:"red", border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            B - Respuesta 2 
                    </button>
                </div>
                <div style={{display:"flex", flexFlow:"column wrap" , justifyContent:"space-between"}}>
                    <button className="preguntas bloque-auto button" 
                        style={{background:"green", border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            C - Respuesta 3 
                    </button>
                    <button className="preguntas bloque-auto button" 
                        style={{background:"purple",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                            D - Respuesta 4 
                    </button>
                </div>
            </div>
            )
    }
}
