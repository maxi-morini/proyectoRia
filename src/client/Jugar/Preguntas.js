import React, { Component , Fragment } from 'react'
import Quiz from './Quiz';
import TrueOrFalse from './TrueOrFalse';

class Preguntas extends Component {

    QuizORTF = () => {
        const isQuiz = this.props.isQuiz;
        if(isQuiz){
            return <Quiz/>
        }else{
            return <TrueOrFalse/>
        }
    }

    render() {
        return (
            <div className="contenedor" style={{flexFlow:"row wrap",width:"100%",height:"100%"}}>
                <this.QuizORTF/>
            </div>
        )
    }
}
export default Preguntas