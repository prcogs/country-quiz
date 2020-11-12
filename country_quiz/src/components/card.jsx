import Start from './start'
import Game from './game'
import Finish from './finish'
import { useState } from 'react'


const Card = ({ countries }) => {
    const [state, setState] = useState("start")
    const [numberQuestion, setNumber] = useState(1)
    const [result, setResult] = useState(0)
    const [totalQuestion, setTotalQuestion] = useState(1)

    const changeState = (state) => {
        setState(state)
    }

    const changeNumber = (newNumber, totalQuestion) => {
        if(newNumber >= (Number(totalQuestion) + 1)) {
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

    const handleTotalQuestion = (number) => {
        setTotalQuestion(number)
    }

    return(
        <div className="card slideRight">
            {state === "start"  ?   <Start changeState={changeState}
                                           handleTotalQuestion={handleTotalQuestion}
                                           totalQuestion={totalQuestion}/> : 

             state === "game"   ?   <Game countries={countries}
                                          changeNumber={changeNumber}
                                          changeResult={changeResult}
                                          numberQuestion={numberQuestion}
                                          totalQuestion={totalQuestion} />  : 

             state === "finish" ?   <Finish changeState={changeState}
                                            restart={restart}
                                            result={result}/>   :

              "Erreur"
            }

        </div>
    )
}

export default Card