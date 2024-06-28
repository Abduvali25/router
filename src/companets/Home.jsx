import CardText from './CardText'
const Home = () => {
  return (
    <div style={{position:"relative"}}>
        <img style={{width:"1100px", marginTop:"60px", marginLeft:"50px"}} src="../public/style.png" alt="style" />
       <div style={{position:"absolute", top:"120px", left:"100px"}}>
        <h1 style={{fontSize:"44px", color:"white"}}>Let's make your <br />home beautiful together</h1>
        <p  style={{fontSize:"20px", color:"white"}}>There are many variations of the passages <br /> of lorem Ipsum fromavailable, majority.</p>
        <button style={{padding:"20px 40px", backgroundColor:"#CDA274", border:"none", borderRadius:"10px", color:"white", fontSize:"12px" }}>Get Started -> </button>
        
       </div>
       <div style={{display:"flex", gap:"150px", marginLeft:"0px"}}>
     <CardText  text="Project Plan"/>
      <CardText  text="Interior Work"/>
      <CardText  text="Realization"/>

     </div>
    </div>
  )
}

export default Home