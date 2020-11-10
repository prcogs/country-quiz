import Start from './start'
import Game from './game'
import Finish from './finish'
import { useState } from 'react'


const Card = ({ countries }) => {
    const [state, setState] = useState("start")
    const [numberQuestion, setNumber] = useState(1)
    const [result, setResult] = useState(0)

    const changeState = (state) => {
        setState(state)
    }

    // ajout d'un state pour choisir le nbr de question ?
    const changeNumber = (newNumber) => {
        if(newNumber >= 6) {
            setState("finish")
        }
        else {setNumber(newNumber)}
    }

    const changeResult = (newResult) => {
        setResult(result + newResult)
    }

    const restart = () => {
        setResult(0)
        setNumber(1)
    }

    return(
        <div className="card">
            {state === "start"  ?   <Start changeState={changeState}/> : 

             state === "game"   ?   <Game countries={countries}
                                          changeNumber={changeNumber}
                                          changeResult={changeResult}
                                          numberQuestion={numberQuestion} />  : 

             state === "finish" ?   <Finish changeState={changeState}
                                            restart={restart}
                                            result={result}
                                            />   :

              "Erreur"
            }

        </div>
    )
}

export default Card