import svg  from '../images/undraw_winners_ao2o 2.svg'

const Finish = ({ changeState , restart, result}) => {

    return (
        <div className="finish">
            <img src={svg}/>
            <p>Result</p>
            <p>You got <strong>{result}</strong> correct answer</p>
            <button onClick={() => {changeState("game"); restart()}} className="btnFinish">Try again</button>
        </div>
    )
}

export default Finish