const GreenCard = (props) => {
    return (
     <div style={{marginTop:"70px", width:"350px", backgroundColor:"#eee", padding:"20px", borderRadius:"20px"}}>
       <h3 style={{textAlign:"center", fontFamily:"DM Serif Display", color:"#CDA274"}}>{props.text}</h3>
       <p style={{textAlign:"center", fontFamily:"Jost" ,color:"#CDA274"}}>There are many variations of the <br /> passages of lorem Ipsum from <br />available, majority.</p>
       <button style={{color:"#CDA274", padding:"15px 30px", border:"none", fontSize:"14px", backgroundColor:"white", marginLeft:"85px"}}>Read More -></button>
     </div>
  
    )
  }
  
  export default GreenCard