import React, { Component } from 'react'
import Seleccion from './Seleccion'
export default class ElegirxSeleccion extends Component {
    constructor(props){
        super(props);
        this.state={filtro:""}
    };

    filtro = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        
    }
    
    render() {

        
        const {juegos} = this.props;
        return (
            <div>
                <input type="text" name="filtro" placeholder="Filtro" onChange={this.filtro} value={this.state.filtro}/>
                {/* {juegos.map(juego=><Seleccion key={juego.Nombre} juego={juego} elegido={this.props.elegido}/>)} */}
                {juegos.filter(juego=> juego.Nombre.includes(this.state.filtro)).map(juego =>
                                <Seleccion key={juego.Nombre} juego={juego} elegido={this.props.elegido}/>)}
            </div>
        )
    }
}
