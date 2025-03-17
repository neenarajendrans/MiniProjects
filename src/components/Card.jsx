
function Card({title = "Neena Rajendran S",content="empty",color="white"}){
    return(
        <>
        <div className="card" style={{backgroundColor: color}}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
        
        </>
    )
}
export default Card