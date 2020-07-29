import React, { Component } from 'react'
import PuntuacionParcialTF from './PuntuacionParcialTF'
import PuntuacionParcialQuiz from './PuntuacionParcialQuiz'
export default class PuntuacionParcial extends Component {


QuizORTF = () => {
    const isQuiz = this.props.isQuiz;
    if(isQuiz){
        return <PuntuacionParcialTF respuestas={this.props.respuestas}/>
    }else{
        return <PuntuacionParcialQuiz respuestas={this.props.respuestas}/>
    }
}

render() {
    return (
        <div className="contenedor" style={{flexFlow:"row wrap",width:"90%",height:"100%"}}>
            <this.QuizORTF/>
        </div>
    )
}
}