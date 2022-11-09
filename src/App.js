import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Counter from "./Counter";
import Convert from './Convert';
import { Link } from 'react-router-dom';


function ToCounter() {

  <button>
    <Link to={'/Convert'}>
      카운터
    </Link>
    </button>

}

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

    return (
        // <Counter/>
        // <Convert/>
          
          // <Router>
          //   <Link to="/Counter">카운터</Link><br/>
          //   <Link to="/Convert">컨버트</Link>

          //   <Routes>
          //     <Route path='/Counter' element={<Counter/>}/>
          //     <Route path='/Convert' element={<Convert/>}/>
          //   </Routes>

          // </Router>

           <Router>
            <button>
              <Link to="/Counter">카운터</Link><br/>
            </button>

            <button>
              <Link to="/Convert">컨버트</Link>
            </button>
            
            <Routes>
              <Route path='/Counter' element={<Counter/>}/>
              <Route path='/Convert' element={<Convert/>}/>
            </Routes>

          </Router>


    );
}

export default App;
