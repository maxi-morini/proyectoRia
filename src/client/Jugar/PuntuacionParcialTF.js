import React, { Component } from 'react'

export default class PuntuacionParcialTF extends Component {

constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
}

componentDidMount(){
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.save();
    let alto1 = (h * this.props.respuestas[0]) / 100;
    ctx.fillStyle = "blue";
    ctx.fillRect (0, h, w/3, -alto1);
    ctx.fillStyle="black";
    ctx.strokeRect(0,h,w/3,-alto1);
    ctx.font = '2vw Comic Sans MS';
    ctx.fillStyle = 'white';
    const txt1 = 'A - True';
    const ancho1 = ctx.measureText(txt1).width;
    const x1 = ((w/3)-ancho1)/2;
    ctx.fillText( txt1, x1 , h-(alto1/2));
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX=2;
    ctx.shadowOffsetY=2;    
    ctx.restore();    
    ctx.save();
    let alto2 = (h * this.props.respuestas[1]) / 100;
    ctx.fillStyle = "red";    
    ctx.fillRect (2*w/3, h, w/3, -alto2);    
    ctx.fillStyle="black";
    ctx.strokeRect(2*w/3,h,w/3,-alto2);
    ctx.font = '2vw Comic Sans MS';
    ctx.fillStyle = 'white';
    const txt2 = 'B - False';
    const ancho2 = ctx.measureText(txt2).width;
    const x2 = (((2*w/3)+(w-ancho2)))/2;
    ctx.fillText( txt2, x2, h-(alto2/2));
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX=2;
    ctx.shadowOffsetY=2;
    ctx.restore();
}

render() {
    return (
        <canvas ref={this.canvasRef} id="canvas"></canvas>
    )
}
}