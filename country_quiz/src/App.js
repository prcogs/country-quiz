import logo from './logo.svg';
import './App.css';
import './components/card.css'
import './components/start.css'
import './components/game.css'
import './components/question.css'
import './components/response.css'

import Card from './components/card'

function App() {
  return (
    <div className="App">
      <h1>COUNTRY QUIZ</h1>
      <Card/>
    </div>
  );
}

export default App;
