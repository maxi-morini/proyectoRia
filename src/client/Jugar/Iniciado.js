import React, { Component } from 'react'

export default class Iniciado extends Component {

    constructor(props){
        super(props);
        this.state={juego:'',
                    name:''
                }
    };
    async componentDidMount(){
        const  juegos =  this.props.match.params.juego;       
        const url = "/api/juegos";
	    const response = await fetch(url);
        const data= await response.json();
        let i =0;
        let ind = juegos.lastIndexOf(":");
        const aux1 = juegos.slice(0, ind);
        this.setState({name :aux1});
        const aux2 = juegos.substring(ind+1);
       while(data[i].Nombre!=aux2){
            i++;
        }
        this.setState({juego:data[i]});        
    }
    render() {
        return (
            <div>
                <h1>algo</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.juego.Nombre}</h1>
            </div>
        )
    }
}
