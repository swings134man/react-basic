import logo from './logo.svg';
import './App.css';
import React from "react";

import Counter from "./Counter";


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
        <Counter/>
    );

    // const [counter, setCounter] = React.useState(0);
    // const onClick = () => {
    //     setCounter(counter + 1);
    // };
    //
    // return (
    //     <div>
    //         <h3>Total Click: {counter}</h3>
    //         <button onClick={onClick}>Click me</button>
    //     </div>
    //
    // );
}

export default App;
