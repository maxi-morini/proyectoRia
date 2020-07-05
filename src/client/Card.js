import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={estado:this.props.juego.Estado,
        };};

    onClick=(e)=>{
        if(this.state.estado=="Activar"){
        this.setState({estado : "Desactivar" })}
        else{
            this.setState({estado: "Activar" })
        }
        this.props.mod(this.props.juego.Nombre,this.state.estado);
    }
    render() {
        const {juego} = this.props;
        return (
            <div>
                
                <h6>{juego.Nombre} - </h6>
                <h6>{juego.Descripcion} - </h6>
                <h6>{juego.Preguntas} - </h6>
                <h6>{juego.Jugadores} - </h6>
                <h6>{juego.Creado}</h6>
                <h6>{juego.Estado}</h6>
                <div>
                    <button>Editar</button>
                    <button onClick={this.onClick}>{this.state.estado}</button>
                </div>
            </div>
        )
    }
}