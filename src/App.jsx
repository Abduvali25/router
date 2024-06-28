import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './companets/Navbar'



function App() {
  return (
   <div className='container'>
     <Router>
        <Navbar />
  </Router>
    
   </div>
  )
}

export default App

