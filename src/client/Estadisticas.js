import React, { Component, Fragment } from 'react'
import Titulo from './Titulo'

export default class Estadisticas extends Component {

    render() {
        return (
            <div>
                <Fragment>
                    <Titulo text={this.props.name}/>
                    <h3>{this.props.loginame}</h3>
                    <h3>Creados: {this.props.juegos.length}</h3>
                    <h3>Jugadores: {this.props.jugadores}</h3>
                </Fragment>
            </div>
        )
    }
}
