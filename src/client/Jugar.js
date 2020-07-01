import React, { Component } from 'react'
import Titulo from './Titulo'
import ElegirxCodigo from './Jugar/ElegirxCodigo'
import ElegirxSeleccion from './Jugar/ElegirxSeleccion';
import { withRouter } from 'react-router-dom';
import Iniciar from './Jugar/Iniciar'


class Jugar extends Component {

    constructor(props){
        super(props);
        this.state={
                    "juego":'',
                    "juegos":[],
    };};
    async componentDidMount(){
        const url = "/api/juegos";
		const response = await fetch(url);
        const data= await response.json();
        this.setState({juegos:data});
    }

    onClick=(e)=>{
        this.props.history.push(`/iniciar:${this.state.juego.Nombre}`)
    }

    elegido=(juego)=>{
        this.setState({juego:juego})
    }

    render() {
        return (
            <div>
                <Titulo text={this.props.text}/>
                <ElegirxCodigo juegos={this.state.juegos}/>
                <ElegirxSeleccion juegos={this.state.juegos} elegido={this.elegido}/>
                <button onClick={this.onClick}>Iniciar</button>
            </div>
        )
    }
}
export default withRouter(Jugar);