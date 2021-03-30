import './App.css';
import './components/card.css'
import './components/start.css'
import './components/game.css'
import './components/question.css'
import './components/response.css'
import './components/finish.css'

import Card from './components/card'
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/europe")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
               
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } 

  else if (!isLoaded) {
    return <div className="App"><p className="chargement">Chargement...</p></div>;
  } 

  else {
    return (
      <div className="App">
        <h1>COUNTRY QUIZ</h1>
        <Card countries={items}/>
        <footer>Florian Fort  @Dev challenges</footer>
      </div>
    );
  }
}

export default App;
