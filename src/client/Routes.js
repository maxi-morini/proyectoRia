import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from './Home'
import Jugar from './Jugar'
import LogIn from './LogIn'
import LogInRegistro from './LoginRegistro'
import Panel from './Panel'

const Routes = () => {
    return (
        <div>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/jugar" component={Jugar}/> */}
                <Route exact path="/jugar" render={(props)=>(<Jugar {...props} isAuthed={true} text={"pe►arl"}/>)}/>
                <Route exact path="/login" component={LogIn}/>
               
                <Route exact path="/registrar" component={LogInRegistro}/>
                <Route  path="/panel:usr" component={Panel}/>
                
                {/*  <Route exact path="/juegos" component={Juegos}/> */}
        </div>
    )
}
export default Routes;