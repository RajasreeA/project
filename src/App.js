import React from 'react';
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
              <Route path="/" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;