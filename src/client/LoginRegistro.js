import React, { Fragment } from 'react';
import Titulo from './Titulo';
import { withRouter } from "react-router";
class LogInRegistro extends React.Component {
	
	
	constructor(props){
		super(props);
		this.state={"user":'',
					"pass":'',
					"lnam":'',
					"fnac":''

	};
	};
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
		this.props.history.push("/");
	}


	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
            <form onSubmit={this.handler}>
                <input type="text" name="user" placeholder="Nombre" onChange={this.onchange}/>
                <input type="date" name="fnac"placeholder="Fecha de nacimiento" onChange={this.onchange}/>
                <input type="text" name="lnam"placeholder="Login Name" onChange={this.onchange}/>
                <input type="pasword" name="pass"placeholder="Password" onChange={this.onchange}/>
                <input type="submit" value="Ingresar" />
            </form>
			</Fragment>
		);
	}

} export default withRouter(LogInRegistro);