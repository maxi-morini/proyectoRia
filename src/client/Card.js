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
            <tr>
                <th>{juego.Nombre} </th>
                <th>{juego.Descripcion} </th>
                <th>{juego.Preguntas} </th>
                <th>{juego.Jugadores} </th>
                <th>{juego.Creado}</th>
                <th>
                    <button type="submit">Editar</button>| 
                    <button type="submit" onClick={this.onClick}>{this.state.estado}</button>
                </th>
                </tr>
        )
    }
}