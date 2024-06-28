import CardText from "./CardText"
import GreenCard from './GreenCard'

const Services = () => {
  return (
  <div style={{marginTop:"50px", position:"relative"}}>
   <img style={{width:"1200px"}} src="../public/bg1.png" alt="bgFoto" />
   <h1 style={{position:"absolute", top:"100px", left:"550px", color:"white"}}>Services</h1>


   <div style={{display:"flex", flexWrap:"wrap"}}>
      <CardText  text="Project Plan"/>
      <CardText  text="Interior Work"/>
      <CardText  text="Retail Design"/>
      <CardText  text="2d/3d Art Work"/>
      <GreenCard text="Interior Work"/>
      <CardText  text="Decoration Work"/>
   </div>
  </div>   
  )
}

export default Services