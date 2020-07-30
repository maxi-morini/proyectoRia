import React, { Component } from 'react'
import Titulo from '../Titulo'
import LineaPunto from './LineaPunto'


export default class PuntuacionTotal extends Component {

    constructor(props){
		super(props);
		this.state={puntajes:[]};
	};

    async componentDidMount(){
        const  {nombreJ} = this.props.match.params;
        const nJuego = nombreJ.substring(1);
		const url = "/api/puntajes";
		const response = await fetch(url);
        const data= await response.json();
        let puntos = data.filter(puntaje => puntaje.juego == nJuego);
        this.setState({puntajes : puntos});
        console.log(this.state.puntajes);         
    }

    render() {
        const {puntajes} = this.state;
        return (
            <div className="columna" style={{height:"100vh"}}>
                <Titulo text={"GameQuiz"}/>
                <div id="puntos" className="columna" style={{height:"50vh", overflowY:"scroll"}}>
                    <table style={{flexShrink:"inherit"}}>
                    <tbody>{puntajes.map(puntaje=>{<LineaPunto punto={puntaje}/>})}</tbody>
                    </table>
                </div>
            </div>
        )
    }
}
