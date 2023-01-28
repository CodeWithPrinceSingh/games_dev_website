import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './UI/pages/home/Home'
 import About from './UI/pages/about/About'
 import News from './UI/pages/news/News' 
import Profolio from './UI/pages/profolio/Profolio' 
 import Contect from './UI/pages/contect/Contect' 


const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
       <Route path="/About" element={ <About />} />
        <Route path="/service" element={ <Profolio />} />
         <Route path="/News" element={ <News />} />
          <Route path="/Contect" element={ <Contect />} />
    </Routes>
    </BrowserRouter>
    </>
        )
}

export default App;
