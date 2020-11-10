

const Response = ({ name, flag, letter}) => {

    return (
        <div className="response">
            <strong>{letter}</strong>    {name}
        </div>
    )
}

export default Response