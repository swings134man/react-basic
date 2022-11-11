import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 1장
import Counter from "./Counter";
import Convert from './Convert';
import ConvertDit from './ConvertDit';
import KmToMile from './test/KmToMile';

// 2장 : props
import PropsEx from './props/PropsEx';
import PropsEx2 from './props/PropsEx2';


function ToCounter() {

  <button>
    <Link to={'/Convert'}>
      카운터
    </Link>
    </button>

}

function App() {

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
            <h2>State & Recap</h2>
            <button>
              <Link to="/Counter">카운터</Link><br/>
            </button>
            <button>
              <Link to="/Convert">컨버트 time</Link>
            </button> 
            <button>
              <Link to="/ConvertDit">컨버트 거리</Link>
            </button> 
            <button>
              <Link to="/KmToMile">km TO Mile</Link>
            </button> 
            <hr/>

            <h2>Props</h2>
            <button>
              <Link to="/PropsEx">First Prop</Link>
            </button> 
            <button>
              <Link to="/PropsEx2">Second Prop</Link>
            </button> 

            <hr/>
            <Routes>
              <Route path='/Counter' element={<Counter/>}/>
              <Route path='/Convert' element={<Convert/>}/>
              <Route path='/ConvertDit' element={<ConvertDit/>}/> 
              <Route path='/KmToMile' element={<KmToMile/>}/>
              <Route path='/PropsEx' element={<PropsEx/>}/>
              <Route path='/PropsEx2' element={<PropsEx2/>}/>
            </Routes>

          </Router>


    );
}

export default App;
