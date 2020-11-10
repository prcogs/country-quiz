import Question from './question'
import { useEffect, useState } from 'react'
import Response from './response'

import getRandomInt from '../lib/getRamdomInt'

const Game = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [countrys, setCountrys] = useState([])
    const [ramdomId, setRamdomId] = useState(getRandomInt(4))
    const [numberQuestion, setNumber] = useState(0)

    const letter = ["A", "B", "C", "D"]

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/region/europe")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    var id = []
                    for(let i = 0; i < 4; i++) {
                        const ramdomId = Math.round(Math.random() * (result.length - 1))
                        id = [...id, result[ramdomId]]
                    }
                    
                    setCountrys(id)
                    setRamdomId(getRandomInt(4))
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [numberQuestion])

    
  
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } 
    
    else if (!isLoaded) {
        return <div>Chargement...</div>;
    } 
    
    else {
        return (
            <div className="game">
                {console.log(ramdomId)}
                <Question country={countrys[ramdomId]}/>
                <ul>
                    {countrys.map((country, i) => (
                        <Response name={country.name} flag={country.flag} letter={letter[i]} key={i}/>
                    ))}
                </ul>
                <button onClick={() => {setNumber(numberQuestion + 1)}} className="btn btnNext">Next</button>
            </div>
        );
    }
}

export default Game