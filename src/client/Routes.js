import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from './Home'
import Jugar from './Jugar'
import LogIn from './LogIn'
import LogInRegistro from './LoginRegistro'
import Panel from './Panel'
import GameCreation from './GameCreation/GameCreation/GameCreation.js'
import Iniciar from './Jugar/Iniciar'
import Iniciado from './Jugar/Iniciado'
import GameCreationSummary from './GameCreation/GameCreationSummary/GameCreationSummary.js'
import PuntuacionTotal from '../client/Jugar/PuntuacionTotal'
import PuntuacionParcial from './Jugar/PuntuacionParcial'

const Routes = () => {
    return (
        <div>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/jugar" component={Jugar}/> */}
                <Route exact path="/jugar" render={(props)=>(<Jugar {...props} isAuthed={true} text={"GameQuiz (Jugador)"}/>)}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/crear" component={GameCreation}/>
				<Route exact path="/crear/resumen" component={GameCreationSummary}/>
                <Route exact path="/registrar" component={LogInRegistro}/>
                <Route  path="/panel:usr" component={Panel}/>
                <Route  path="/iniciar:nombre" component={Iniciar}/>
                <Route path="/iniciado:name:juego" component={Iniciado}/>
                <Route path="/puntaje" component={PuntuacionTotal}/>
                <Route path="/puntacionparcial" component={PuntuacionParcial}/>
        </div>
    )
}
export default Routes;