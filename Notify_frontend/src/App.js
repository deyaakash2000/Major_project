
import './App.css';
import AddbirthdayDate from './components/AddbirthdayDate';
import Register from  './components/Register';
import Login from './components/Login';
import Eventstate from './contex/user/Eventstate.js';
import Contactus from './components/Contactus.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Error from './components/Error';
function App() {
  return (
    <div>
       <Eventstate>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/register" element={<Register></Register>}/>
      <Route exact path="/login" element={<Login></Login>}/>
      <Route exact path="/dashboard" element={ <AddbirthdayDate></AddbirthdayDate>}/>
      <Route exact path="/contact" element={ <Contactus></Contactus>}/>
      <Route exact path="/service" element={ <Service></Service>}/>
      <Route exact path="*" element={ <Error></Error>}/>
      </Routes>
      </BrowserRouter>
     
      </Eventstate> 
    
    </div>
  );
}

export default App;
