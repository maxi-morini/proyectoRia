import React, { Component } from 'react'
import Titulo from '../Titulo';

export default class LineaPunto extends Component {
	render() {
		const { puntaje } = this.props;
		return (
			<tr>
				<td><h1>{puntaje.lugar}</h1> </td>
				<td> - </td>
				<td><h1>{puntaje.nombre}</h1></td>
				<td style={{ textAlign: "left" }}><h1>{puntaje.puntaje}</h1> </td>
				<td><h1>pts</h1></td>
			</tr>
		)
	}
}
