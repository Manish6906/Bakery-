
import './App.css'
import About from './Component/About'
import Carousel from './Component/Carousel'
import Contact from './Component/Contact'
import Gallery from './Component/Gallery'
import Home from './Component/Home'
import Menu from './Component/Menu'

function App() {

  return (
    <>
    
    <Home /> 
    <Carousel />
    <About />
   <Gallery />
   <Menu />
   <Contact />
   {/* <div className="card" style={{width: "18rem;"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
  
    </>
  )
}

export default App
