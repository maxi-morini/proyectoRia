import React, { Component, Fragment } from 'react'
import Tiempo from './Tiempo'

export default class BtnSiguiente extends Component {

    render() {
        return (
            <Fragment>
            <button id="boton" className="button bloque" style={{border:"2px solid black", height:"25%",fontSize: "3vw"}}
                onClick={this.props.stop}>Siguiente</button>
            </Fragment>
        )
    }
}
