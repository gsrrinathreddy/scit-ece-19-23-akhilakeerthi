import React from 'react' 
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Certifications from './Pages/Certifications';
import Workshop from './Pages/Workshop';

function App() {
  return(
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path ="About" element={<About/>}/>
    <Route path ="Experience" element={<Experience/>}/>
    <Route path ="Hobbies" element={<Hobbies/>}/>
    <Route path ="Qualifications" element={<Qualifications/>}/>
    <Route path ="Skills" element={<Skills/>}/>
    <Route path ="Projects" element={<Projects/>}/>
    <Route path ="Certifications" element={<Certifications/>}/>
    <Route path ="Workshop" element={<Workshop/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;