import Hero from './component/Hero'
import Benefits from './component/Benefits'
import FeedBack from './component/FeedBack'
import Feature from './component/Feature'
import About from './component/About'
import Call from './component/Call'
import Footer from './component/Footer'
function App() {

  return (
    <>
   
    <div>
     <Hero></Hero>
     </div>
     <div>
     
     <Benefits ></Benefits>
     </div>
    
     <div>
     <FeedBack></FeedBack>
     </div>
    <div className='flex'>

      <Feature />
   
    </div>
    <div className='flex'>
      <About />
    </div>
    <div>
      <Call/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
