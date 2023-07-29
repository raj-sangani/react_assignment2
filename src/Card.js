import './Card.css'
function Card(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.message}</p>
        </div>
    )
}

export default Card;