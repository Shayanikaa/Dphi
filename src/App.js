import './App.css';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Forms.jsx';
import Brief from './Brief';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Forms' element={<Forms/>}/>
    <Route exact path='/Brief' element={<Brief/>}/>


  </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
