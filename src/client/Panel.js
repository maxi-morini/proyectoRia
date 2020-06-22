import React, { Component } from 'react'
import Titulo from './Titulo';

export default class Panel extends Component {

    constructor(props){
        super(props);
        this.state={"user":'',
                    "pass":'',
                    "lnam":'',
                    "fnac":'',
                    "juegos":''
    };};

    async componentDidMount(){ 
        const  {usr} = this.props.match.params;
        const url = "/api/juegos";
		const response = await fetch(url);
        const data= await response.json();
        const temp = [];
        const user = usr.substring(1);
        let j = 0;               
        for(let i = 0; i < data.length;i++){
            if(data[i].user===user){
                temp[j]=data[i];
                j++;
            }
        }
        this.setState({juegos : temp});
        console.log(temp);
    }

    render() {
        return (
            <div>
                <Titulo text={"GameQuiz"}/>
            </div>
            // <div>

            // </div>
        )
    }
}
