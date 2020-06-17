import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from './Home'
import Jugar from './Jugar'
import LogIn from './LogIn'

const Routes = () => {
    return (
        <div>
            
                <Route exact path="/" component={Home}/>
                <Route exact path="/jugar" component={Jugar}/>
                <Route exact path="/login" component={LogIn}/>
                {/* 
                <Route exact path="/registrar" component={LogInRegistro}/>
                
                <Route exact path="/juegos" component={Juegos}/> */}
        </div>
    )
}
export default Routes;