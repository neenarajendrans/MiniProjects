
import "./style.css"
import Card from './Card'
function ReuseableUI() {
    const cardData = [
        {id:1, title:"Neena Rajendran S",content:"Passionate MERN Developer",color:"blue" },
        {id:2, title:"Nayana R ", content:"A creative mind at work.",color:"grey"}
    ]
  return (
    <div id='container1'>
        {
            cardData.map(({id,title,content,color})=>(
                <Card key={`card-${id}`} title={title} content={content} color={color}/>
            ))
        }
      
    </div>
  )
}

export default ReuseableUI