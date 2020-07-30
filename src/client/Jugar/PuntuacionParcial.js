import React, { Component, Fragment } from 'react'
import PuntuacionParcialTF from './PuntuacionParcialTF'
import PuntuacionParcialQuiz from './PuntuacionParcialQuiz'

import Titulo from '../Titulo';
export default class PuntuacionParcial extends Component {


QuizORTF = () => {
    const isQuiz = this.props.location.isQuiz.isQuiz;
    if(isQuiz){
        return <PuntuacionParcialQuiz respuestas={this.props.location.respuestas.respuestas}/>
    }else{
        return <PuntuacionParcialTF respuestas={this.props.location.respuestas.respuestas}/>
    }
}


render() {
    return (
        <Fragment>
            <Titulo text={"GameQuiz"}/>
            <Titulo text={"Pregunta " + this.props.location.pregunta.numero}/>
            <Titulo text={this.props.location.puntaje.vale}/>
        <div className="contenedor" style={{flexFlow:"row wrap",width:"90%",height:"50%"}}>
            <this.QuizORTF/>
        </div>
        <div>
            
        </div>
        </Fragment>
    )
}
}