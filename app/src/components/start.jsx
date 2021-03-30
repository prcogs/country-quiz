

const Start = ({ changeState, handleTotalQuestion, totalQuestion }) => {

    return(
        <div className="start">
            <p>Questions on country capitals and flags.</p>
            <p>If you have all the right answers, maybe you will receive great rewards (or not).</p>
            
            <input type="number" 
                   min="1" max="20" 
                   onChange={e => {handleTotalQuestion(e.target.value)}} 
                   value={totalQuestion} 
                   className="inputNumber"/>

            <button className="btn" onClick={() => {changeState("game")}}>Start</button>
        </div>
    )
}

export default Start