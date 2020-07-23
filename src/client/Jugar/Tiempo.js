import React, { Component } from 'react'
import Titulo from '../Titulo';


export default class Tiempo extends Component {
    constructor(props){
        super(props);
        this.state={tiempo:this.props.time,
                    stop:'',
                    t:'',
                    una: 0        
        }
        this.stop = this.stop.bind(this);
        
    };
    
    stop(){
        clearTimeout(this.state.t);
        this.setState({tiempo:3});
        this.setState({stop:false});
        this.updateClock();
    }

    updateClock(){
        document.getElementById('tiempo').innerHTML= this.state.tiempo;
        if(this.state.tiempo==0){
            console.log(this.state.tiempo);
        }else if(this.props.stop && this.state.una == 0){
            this.setState({una:1});
            this.stop()
        }else{ 
            const aux = this.state.tiempo - 1;    
            this.setState({tiempo: aux})
            return setTimeout(this.updateClock.bind(this),1000);
        }       
    }

    componentDidMount(){
        this.setState({ t : this.updateClock()});
    }

    

    render() {
        return (
        <h3 id="tiempo" style={{display:"inline",border:"1px solid black", 
                borderRadius:"50%",height:"33vh",width:"33vw" }}></h3>
        )
    }
}
