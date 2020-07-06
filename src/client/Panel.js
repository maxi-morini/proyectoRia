import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Titulo from './Titulo';
import Estadisticas from './Estadisticas';
import Cards from './Cards';

class Panel extends Component {

    constructor(props){
        super(props);
        this.state={"user":'',
                    "pass":'',
                    "lnam":'',
                    "fnac":'',
                    "juegos":[],
                    "jugadores":''
    };};

    async componentDidMount(){ 
        const  {usr} = this.props.match.params;
        const url1 = "/api/juegos";
		const response1 = await fetch(url1);
        const data1= await response1.json();
        const temp = [];
        const user = usr.substring(1);
        this.setState({user:user});
        let j = 0;               
        for(let i = 0; i < data1.length;i++){
            if(data1[i].user===user){
                temp[j]=data1[i];
                j++;
            }
        }
        this.setState({juegos : temp});
        const url2 = "/api/jugadores";
		const response2 = await fetch(url2);
        const data2= await response2.json();
        let i =0;
        while(data2[i].user!=user){
            i++;
        }
        this.setState({lnam:data2[i].logiName,
                        jugadores:data2.length
        });
    }

    mod=(nombre, est)=>{
        const url = '/api/juegos';
        const data = { "Nombre": nombre, "Estado": est};
        console.log(nombre,est);
        
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(data), 
            headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())

    }

    render() {
        return (
            <div className="columna">
                <Titulo text={"GameQuiz"}/>
                <div style={{alignSelf:"flex-end"}}>
                    <Link to="/crear" className="bloque-auto">Crear</Link>
                </div>
                    
                <Estadisticas name={this.state.user} loginame={this.state.lnam} 
                        juegos={this.state.juegos} jugadores={this.state.jugadores}/>
                
                <Cards juegos={this.state.juegos} mod={this.mod}/>
                
            </div>
            
        )
    }
}
export default Panel;