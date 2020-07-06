import React, { Component } from 'react'
import Titulo from '../Titulo'
import Iniciado from './Iniciado';
import { Route } from 'react-router-dom';



export default class Iniciar extends Component {
   
    constructor(props){
        super(props);
        this.state={juego:'',
                    name:'',
                    totalTime: 5
                }
    };
    

    updateClock(){    
    document.getElementById('espera').innerHTML = this.state.totalTime;
    if(this.state.totalTime==0){
        this.props.history.push(`/iniciado:${this.state.name}&${this.state.juego.Nombre}`)
    }else{
    const aux = this.state.totalTime - 1;    
    this.setState({totalTime: aux})
    setTimeout(this.updateClock.bind(this),1000);
    }
    }

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
    onChange = e=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (
            <div>
                <Titulo text={"GameQuiz (Jugador)"}/>
                {this.state.juego.Nombre}
                {this.state.juego.Descripcion}
                {/* {this.state.juego.Portada} */}
                <input type="text" name="name" onChange={this.onChange} value={this.state.name}
                    placeholder="Nombre"/>
                <button id="espera" onClick={this.updateClock.bind(this)}>Iniciar</button>
           </div>
        )
    }
}
