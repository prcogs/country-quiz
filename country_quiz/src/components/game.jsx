import Question from './question'
import { useEffect, useState } from 'react'
import Response from './response'

import getRandomInt from '../lib/getRamdomInt'
import svgGame from '../images/undraw_adventure_4hum 1.svg'

const Game = ({ countries, changeNumber, changeResult, numberQuestion }) => {
    const [ramdomCountries, setRamdomCountries] = useState([])
    const [ramdomId, setRamdomId] = useState("")
    const [cssResponse, setCssResponse] = useState(null)

    const letter = ["A", "B", "C", "D"]

    useEffect(() => {
        var id = []
        for(let i = 0; i < 4; i++) {
            const ramdomIds = Math.round(Math.random() * (countries.length - 1))
            id = [...id, countries[ramdomIds]]
        }

        setRamdomCountries(id)
        setRamdomId(getRandomInt(4))
    },[numberQuestion])


    // résoud le bug de la première génération du composant (ramdomCountries => []),
    // + bug => le composant fait un rendu 2x alors qu'il devrais le faire qu'1x
    if(ramdomCountries[ramdomId] === undefined) {
        var question = []
    }
    else {
        question = ramdomCountries[ramdomId]
    }

    const testResponse = (responseClient) => {
        if(responseClient === ramdomCountries[ramdomId].name) {
            changeResult(1)
            setCssResponse([{ "name" : ramdomCountries[ramdomId].name, "check" : true}, 
                            { "name" : "", "check" : ""} 
                        ])
            console.log("true")
        }

        else {
            changeResult(0)
            setCssResponse([{ name : ramdomCountries[ramdomId].name, check : true}, 
                            { name : responseClient, check : false} 
                        ])
            console.log("false")
        }
    }

    useEffect(() => {

    })

  
    return(
        <div className="game">
            <img src={svgGame} className="svgGame"/>
            <Question country={question}/>
            <ul>
                {ramdomCountries.map((ramdomCountry, i) => (
                    <Response name={ramdomCountry.name} 
                              flag={ramdomCountry.flag}
                              testResponse={testResponse}
                              cssResponse={cssResponse} 
                              letter={letter[i]} 
                              key={i}/>
                ))}
            </ul>
            <p className="numberQ">{numberQuestion} / 5</p>
            <button onClick={() => {changeNumber(numberQuestion + 1); setCssResponse(null)}} className="btn btnNext">Next</button>
        </div>
    );
    
}

export default Game