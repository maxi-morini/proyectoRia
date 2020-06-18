import React, { Component } from 'react'
import Titulo from './Titulo'

export default class Jugar extends Component {
    render() {
        return (
            <div>
                <Titulo text={this.props.text}/>
                <h1>Aca se jria</h1>
            </div>
        )
    }
}
