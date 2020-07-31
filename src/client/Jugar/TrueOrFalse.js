import React, { Component } from 'react'

export default class TrueOrFalse extends Component {

	constructor(props) {
		super(props);
		this.onClickTF = this.onClickTF.bind(this);
	};

	onClickTF(e){
		this.props.childFatherConn(e.target.name);
	}

	render() {
		return (
			<div className="contenedor" style={{ width: "100%", height: "100%" }}>
				<button className="preguntas bloque-auto button" name="true" onClick={this.onClickTF}
					style={{ background: "blue", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
					A - True
            </button>
				<button className="preguntas bloque-auto button" name="false" onClick={this.onClickTF}
					style={{ background: "red", border: "2px solid black", height: "50%", fontSize: "2vw" }}>
					B - False
            </button>
			</div>
		)
	}
}
