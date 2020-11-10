

const Start = ({ changeState }) => {

    return(
        <div className="start">
            <p>Five questions on country capitals and flags.</p>
            <p>If you have the right 5 answers, maybe you will receive great rewards (or not).</p>
            <button className="btn" onClick={() => {changeState("game")}}>Start</button>
        </div>
    )
}

export default Start