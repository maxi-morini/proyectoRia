import React, { Component , Fragment } from 'react'
import Quiz from './Quiz';
import TrueOrFalse from './TrueOrFalse';
import Tiempo from './Tiempo';
import BtnSiguiente from './BtnSiguiente'

class Preguntas extends Component {
    
    constructor(props){
        super(props);
        this.state={juego:'',
                    name:'',
                    time:10,
                    stop: false,
                    respuestas:[25,25,25,25]
                }
        this.stop = this.stop.bind(this);
    };

    QuizORTF = () => {
        const isQuiz = this.props.isQuiz;
        if(isQuiz){
            return <Quiz/>
        }else{
            return <TrueOrFalse/>
        }
    }
    stop = () =>{       
        this.setState({stop:true});
        //this.props.history.push(`/puntaje:${this.state.juego.Nombre}`)
    }

    render() {
        return (
            <Fragment>
            <div className="contenedor" style={{flexFlow:"row wrap",width:"100%",height:"100%"}}>
                <this.QuizORTF/>
            </div>
            <div className="contenedor" style={{flexFlow:"row wrap",width:"100%",height:"100%"}}>
                <Tiempo time={this.state.time} stop={this.state.stop}/>
                <div style={{width:"25%",height:"100%"}}>
                <BtnSiguiente stop={this.stop}/>
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Preguntas