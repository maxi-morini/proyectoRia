import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';

export default class Card extends Component {

    op=(est)=>{
        if(est==='activa'){
            return "Desactivar"
        }else{
            return "Activar"
        }

    }

    onClick=(e)=>{
       this.props.mod(this.props.juego.Nombre,this.props.Estado);
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
                <div>
                    <button>Editar</button>
                    <button onClick={this.onClick}>{this.op(juego.Estado)}</button>
                </div>
            </div>
        )
    }
}