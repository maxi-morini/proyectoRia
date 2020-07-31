import React, { Component } from 'react'


export default class Titulo extends Component {
	render() {
		return (
			<div className="contenedor">
				<h1>{this.props.text}</h1>
			</div>
		)
	}
}