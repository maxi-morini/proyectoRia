import React, { Component } from 'react'

export default class TrueOrFalse extends Component {
    render() {
        return (
            <div className="contenedor" style={{width:"100%",height:"100%"}}>
            <button className="preguntas bloque-auto button" 
                style={{background:"blue",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                    A - True
            </button>
            <button className="preguntas bloque-auto button" 
                style={{background:"red",border:"2px solid black", height:"25%",fontSize: "2vw"}}>
                    B - False
            </button>
            </div>
        )
    }
}
