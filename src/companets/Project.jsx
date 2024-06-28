import Buttons from "./Buttons"
import Bedroom from "./Bedroom"

const Project = () => {
  return (
   <div>
     <div style={{marginTop:"50px", position:"relative"}}>
    <img style={{width:"1200px"}} src="../public/bg2.png" alt="bgFoto" />
    <h1 style={{position:"absolute", top:"100px", left:"550px", color:"white"}}>Our Project</h1>
     
      <Buttons />
    </div>
    <div>
      <Bedroom />
    </div>
   </div>
  )
}

export default Project