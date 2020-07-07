import React, { Component } from 'react'
import Card from './Card'
export default class Cards extends Component {   
    render() {
        const {juegos} = this.props;
        return (
            <div className="lista">
                <table>
                    <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Peguntas</th>
                    <th>Jugados</th>
                    <th>Creado</th>
                    <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {juegos.map(juego=><Card juego={juego} key={juego.Nombre} mod={this.props.mod}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
