import React, { Component } from 'react'
import Card from './Card'
export default class Cards extends Component {   
    render() {
        const {juegos} = this.props;
        return (
            <div>
                {juegos.map(juego=><Card juego={juego} key={juego.Nombre} mod={this.props.mod}/>)}
            </div>
        )
    }
}
