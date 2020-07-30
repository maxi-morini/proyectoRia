import React, { Component } from 'react'

export default class LineaPunto extends Component {
    render() {
        const {punto} = this.props;
        return (
            <tr>
                <td>{punto.lugar} </td>
                <td> - </td>
                <td>{punto.nombre} </td>
                <td>{punto.puntaje} </td>                
                <td>pts</td>
            </tr>
        )
    }
}
