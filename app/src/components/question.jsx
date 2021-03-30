import FlagQuestion from './flagQuestion'

const Question = ({ country, count }) => {

        return (
            <div className="question">
                { count === 1 ?  country.capital + " is the capital of" : <FlagQuestion flag={country.flag}/>}
            </div>
        )
}

export default Question