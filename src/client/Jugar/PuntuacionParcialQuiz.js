import React, { Component } from 'react'

export default class PuntuacionParcialTF extends Component {

	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		const canvas = this.canvasRef.current;
		const ctx = canvas.getContext('2d');
		const w = canvas.width;
		const h = canvas.height;
		ctx.save();
		let alto1 = (h * this.props.respuestas[0]) / 100;
		ctx.fillStyle = "blue";
		ctx.fillRect(0, h, w / 5, -alto1);
		ctx.fillStyle = "black";
		ctx.strokeRect(0, h, w / 5, -alto1);
		ctx.font = 'Comic Sans MS';
		ctx.fillStyle = 'white';
		const txt1 = 'A';
		const ancho1 = ctx.measureText(txt1).width;
		const x1 = ((w / 5) - ancho1) / 2;
		ctx.fillText(txt1, x1, h - (alto1 / 2), x1);
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.restore();
		ctx.save();
		let alto2 = (h * this.props.respuestas[1]) / 100;
		ctx.fillStyle = "red";
		ctx.fillRect(((w / 5) + (w / 15)), h, w / 5, -alto2);
		ctx.fillStyle = "black";
		ctx.strokeRect(((w / 5) + (w / 15)), h, w / 5, -alto2);
		ctx.font = '2vw Comic Sans MS';
		ctx.fillStyle = 'white';
		const txt2 = 'B';
		const ancho2 = ctx.measureText(txt2).width;
		const x2 = (w / 5) + (w / 15) + ((w / 5 - ancho2) / 2);
		ctx.fillText(txt2, x2, h - (alto2 / 2));
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.restore();
		ctx.save();
		let alto3 = (h * this.props.respuestas[2]) / 100;
		ctx.fillStyle = "green";
		ctx.fillRect(((2 * w / 5) + (2 * w / 15)), h, w / 5, -alto2);
		ctx.fillStyle = "black";
		ctx.strokeRect(((2 * w / 5) + (2 * w / 15)), h, w / 5, -alto2);
		ctx.font = '2vw Comic Sans MS';
		ctx.fillStyle = 'white';
		const txt3 = 'C';
		const ancho3 = ctx.measureText(txt3).width;
		const x3 = (2 * w / 5) + (2 * w / 15) + ((w / 5 - ancho3) / 2);
		ctx.fillText(txt3, x3, h - (alto2 / 2));
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.restore();
		ctx.save();
		let alto4 = (h * this.props.respuestas[3]) / 100;
		ctx.fillStyle = "purple";
		ctx.fillRect(((3 * w / 5) + (3 * w / 15)), h, w / 5, -alto2);
		ctx.fillStyle = "black";
		ctx.strokeRect(((3 * w / 5) + (3 * w / 15)), h, w / 5, -alto2);
		ctx.font = '2vw Comic Sans MS';
		ctx.fillStyle = 'white';
		const txt4 = 'C';
		const ancho4 = ctx.measureText(txt3).width;
		const x4 = (3 * w / 5) + (3 * w / 15) + ((w / 5 - ancho3) / 2);
		ctx.fillText(txt4, x4, h - (alto2 / 2));
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.restore();


	}

	render() {
		return (
			<canvas ref={this.canvasRef} id="canvas"></canvas>
		)
	}
}