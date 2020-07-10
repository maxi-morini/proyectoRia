import React, { Component, Fragment } from 'react'
import Titulo from './Titulo'



export default class Estadisticas extends Component {

    render() {
        return (
            <div style={{display:"flex",flexFlow:"column wrap",justifyContent:"space-between", alignContent:"flex-start",border: "2px solid black"}}>
                    <h3 >{this.props.name}</h3>
                    <h6 style={{textAlign:"left"}}>{this.props.loginame}</h6>
                    <h6 style={{textAlign:"left"}}>Creados: {this.props.juegos.length}</h6>
                    <h6 style={{textAlign:"left"}}>Jugadores: {this.props.jugadores}</h6>
                </div>
        )
    }
}
