import React, { Component } from 'react'

export default class Seleccion extends Component {

    onClick=(e)=>{
        this.props.elegido(this.props.juego)
    }

    render() {
        const {juego} = this.props;
        return (
            <div>
                <button onClick={this.onClick}>{juego.Nombre} ({juego.Preguntas})</button>
            </div>
        )
    }
}
