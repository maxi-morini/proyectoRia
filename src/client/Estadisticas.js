import React, { Component, Fragment } from 'react'
import Titulo from './Titulo'



export default class Estadisticas extends Component {

    render() {
        return (
            <div>
                <div className="bloque-auto">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.loginame}</p>
                    <p>Creados: {this.props.juegos.length}</p>
                    <p>Jugadores: {this.props.jugadores}</p>
                </div>
            </div>
        )
    }
}
