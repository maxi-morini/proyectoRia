import React, { Fragment } from 'react';
import Titulo from "./Titulo"
import { Link } from 'react-router-dom';
class Home extends React.Component {

	constructor(props){
        super(props);
        this.state= {text : "Game Quiz"}
    }


	render() {
		
		return (
			<Fragment>
			<Titulo text={this.state.text}/>
            <Link to="/jugar">Jugar</Link><br/>
			<Link to="/login">Login</Link>
			</Fragment>
		);
	}

} export default Home;