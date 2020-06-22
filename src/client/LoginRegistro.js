import React, { Fragment } from 'react';
import Titulo from './Titulo';
import { withRouter } from "react-router";
class LogInRegistro extends React.Component {
	
	
	constructor(props){
		super(props);
		this.state={"user":'',
					"pass":'',
					"lnam":'',
					"fnac":'',
					"usuarios":''
	};
	};
	async componentDidMount(){
		const url = "/api/jugadores";
		const response = await fetch(url);
		const data= await response.json();
		const usr = [];
		for(let i =0; i<data.length;i++){
			usr[i] = data[i].user;
		}
		this.setState({jugadores : usr});
	}

	onchange = e=>{        
        this.setState({
            [e.target.name] : e.target.value
	})
	}	
	
	handler=(e)=>{
		e.preventDefault();
		const url = "/api/jugadores";
		const data = {"user":this.state.user,"pass":this.state.pass,"logiName":this.state.lnam,"fnac":this.state.fnac};
		fetch(url, {
			method: 'POST', 
			body: JSON.stringify(data), 
			headers:{
			  'Content-Type': 'application/json'
			}}).then(res => res.json())
			.catch(error => console.error('Error:', error))
			.then(response => console.log('Success:', response));
		this.props.history.push(`/panel:${this.state.user}`)}
	
		
	userControl = e =>{
		const tope = this.state.jugadores.length;
		const jugadores = this.state.jugadores;
		const usr = this.state.user;
		let form = document.getElementById("padre");
		let noti = document.getElementById("hijo");
		if(noti!== null){
			form.removeChild(noti);
		};
		for(let i =0; i<tope;i++){
			if(jugadores[i] ==usr ){
				let form = document.getElementById("padre");
				const node = document.createElement("h1");
				const text = document.createTextNode("Pass incorrecto");
				node.setAttribute("id","hijo")
				node.appendChild(text);
				form.appendChild(node);				
			}
		}
	}	

	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
            <form id="padre"onSubmit={this.handler}>
                <input type="text" name="user" placeholder="Nombre" onChange={this.onchange}/>
                <input type="date" name="fnac"placeholder="Fecha de nacimiento" onChange={this.onchange}/>
                <input type="text" name="lnam"placeholder="Login Name" onChange={this.onchange}/>
                <input type="pasword" name="pass"placeholder="Password" onChange={this.onchange}/>
                <input type="submit" value="Ingresar" onClick={this.userControl} />
            </form>
			</Fragment>
		);
	}

} export default withRouter(LogInRegistro);