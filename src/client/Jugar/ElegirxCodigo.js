import React, { Component } from 'react'

export default class FormElegir extends Component {



    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} placeholder="Join game (link)"/>
                <input type ="password" placeholder="Password"/>
            </div>
        )
    }
}
