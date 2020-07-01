import React, { Component } from 'react'
import Seleccion from './Seleccion'
export default class ElegirxSeleccion extends Component {
    render() {
        const {juegos} = this.props;
        return (
            <div>
                {juegos.map(juego=><Seleccion key={juego.Nombre} juego={juego} elegido={this.props.elegido}/>)}
            </div>
        )
    }
}
