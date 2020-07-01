import React, { Component } from 'react'
import Titulo from '../Titulo'

export default class Iniciar extends Component {
   
    constructor(props){
        super(props);
        this.state={"juego":''}
    };

    async componentDidMount(){
        const  {nombre} = this.props.match.params;
        const url = "/api/juegos";
		const response = await fetch(url);
        const data= await response.json();
        let i =0;
        const j = nombre.substring(1);
        while(data[i].Nombre!=j){
            i++;
        }
        this.setState({juego:data[i]});        
    }
    render() {
        return (
            <div>
                <Titulo text={"GameQuiz (Jugador)"}/>
                {this.state.juego.Nombre}
           </div>
        )
    }
}
