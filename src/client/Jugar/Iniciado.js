import React, { Component, Fragment } from 'react'
import Titulo from '../Titulo'
import Tiempo from './Tiempo';
import BtnSiguiente from './BtnSiguiente';
import Preguntas from './Preguntas';
import PuntuacionParcial from './PuntuacionParcial';
import PuntuacionTotal from './PuntuacionTotal'
import { Link } from 'react-router-dom';
export default class Iniciado extends Component {

    constructor(props){
        super(props);
        this.state={juego:'',
                    name:'',
                    time:10,
                    stop: false,
                    respuestas:[25,25,25,25]
                }
    };
    async componentDidMount(){
        const  juegos =  this.props.match.params.juego;       
        const url = "/api/juegos";
	    const response = await fetch(url);
        const data= await response.json();
        let ind = juegos.lastIndexOf(":");
        const aux1 = juegos.slice(0, ind);
        this.setState({name :aux1});
        const aux2 = juegos.substring(ind+1);
        this.setState({juego:data.filter(juego => juego.Nombre==aux2)[0]});
    }
    sumarPuntaje(){

    }
    
    
    render() {
        return (
            <Fragment>
                <Titulo text={"GameQuiz"}/>
                <div style={{height:"25vh"}}>
                <Preguntas isQuiz={true}/>
                </div>
                {/* <PuntuacionTotal nombre={this.state.juego.Nombre}/> 
                <PuntuacionParcial isQuiz={false} respuestas={this.state.respuestas }/> */}
            </Fragment>
        )
    }
}
