import svg  from '../images/undraw_winners_ao2o 2.svg'

const Finish = ({ changeState , restart, result}) => {

    return (
        <div className="finish">
            <img src={svg} alt="finish"/>
            <p>Result</p>
            <p>You got <strong>{result}</strong> correct answer</p>
            <button onClick={() => {changeState("start"); restart()}} className="btnFinish">Try again</button>
        </div>
    )
}

export default Finish