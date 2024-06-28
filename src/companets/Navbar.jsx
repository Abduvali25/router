import {  Route , Routes, NavLink } from 'react-router-dom'
import Home from './Home'
import NotFount from './NotFount'
import Services from './Services'
import Project from './Project'
import { BsSearch } from "react-icons/bs";



const Navbar = () => {

  return (
    <div>
    <header>
      <nav>
       <div style={{display:"flex", alignItems:"center"}}>
       <div style={{display:"flex"}}>
            <img style={{width:"40px", height:"40px", marginTop:"10px"}} src="../public/house.png" alt="houseLogo" />
            <h2><strong>SELHONO</strong></h2>
        </div>

        <ul style={{display:"flex", gap:"30px", marginLeft:"450px"} } className='ulList'>
          <li><NavLink to={"/"} style={({isActive }) => ({fontWeight : isActive ? "bold" : "",})}>Home</NavLink></li>
          <li><NavLink >Pages</NavLink></li>
          <li><NavLink to={"/Services"} style={({isActive }) => ({fontWeight : isActive ? "bold" : "",})}>Services</NavLink></li>
          <li><NavLink to={"/Project"} style={({isActive }) => ({fontWeight : isActive ? "bold" : "",})}>Project</NavLink></li>
          <li><NavLink >Blog</NavLink></li>
          <li><NavLink >Contact</NavLink></li>
          <li><NavLink to={"/"} style={({isActive }) => ({fontWeight : isActive ? "#CDA274" : "",})}> <BsSearch /></NavLink></li>
        </ul>
       </div>
      </nav>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Services' element={<Services />}/>
      <Route  path='/Project' element={<Project />}/>

      <Route  path='*' element={<NotFount />}/>

    </Routes>
    </header>
   </div>
  )
}

export default Navbar