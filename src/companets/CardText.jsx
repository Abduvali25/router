const CardText = (props) => {
  return (
   <div style={{marginTop:"70px", width:"350px"}}>
     <h3 style={{textAlign:"center", fontFamily:"DM Serif Display"}}>{props.text}</h3>
     <p style={{textAlign:"center", fontFamily:"Jost"}}>There are many variations of the <br /> passages of lorem Ipsum from <br />available, majority.</p>
     <button style={{padding:"15px 30px", border:"none", fontSize:"14px", backgroundColor:"white", marginLeft:"85px"}}>Read More -></button>
   </div>

  )
}

export default CardText