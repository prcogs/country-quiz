import Start from './start'
import Game from './game'
import Finish from './finish'
import { useState } from 'react'


const Card = () => {
    const [state, setState] = useState("game")

    const changeState = (state) => {
        setState(state)
    }

    return(
        <div className="card">
            {state === "start" ?  <Start changeState={changeState}/> : 
             state === "game"  ?  <Game changeState={changeState}/>  : 
                                  <Finish changeState={changeState}/>
            }

        </div>
    )
}

export default Card