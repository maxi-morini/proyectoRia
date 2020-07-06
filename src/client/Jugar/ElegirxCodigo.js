import React, { Component } from 'react'

export default class FormElegir extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={link:"",
    //                 pass:""}
    // };

    // onChange = e =>{

    //     this.setState({
    //         [e.target.name] : e.targe.value,
    //     })
    // }onChange={this.onChange} value={this.state.link}//onChange={this.onChange} value={this.state.pass}



    render() {
        return (
            <div>
                <input type="text" name="link" 
                            placeholder="Join game (link)"/>
                <input type ="password" name="pass" 
                        placeholder="Password" />
            </div>
        )
    }
}
