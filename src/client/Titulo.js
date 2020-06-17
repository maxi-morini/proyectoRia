import React, { Component } from 'react'

const estilo={
    // gridColumn:'2',
    width:'33%'
}

export default class Titulo extends Component {
    render() {
        return (
            <div style={estilo}>
               <h1 className='titulo'>{this.props.text}</h1>
            </div>
        )
    }
}
