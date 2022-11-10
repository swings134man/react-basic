import React, { useState } from "react";

function ConvertDit () {
  
    const [data, setData] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    
    // 값 변경시 convert
    const onChange = (event) => {
        setData(event.target.value);
    };
    // 초기화
    const reset = () => setData(0);
    // 변경시
    const onInverted = () => {
        reset();
        setInverted((current) => !current); // false <-> true
    };


    return (
      <div>
        <h1>Super DiterMin Converter</h1>
        <div>
          <label htmlFor="km">km</label>
          <input
            value={inverted ? data / 0.62137 : data }
            id="km"
            placeholder="Km"
            type="number"
            onChange={onChange}
            disabled={inverted}
          />
        </div>
  
        <div>
          <label htmlFor="miles">Miles</label>
          <input
            value={inverted ? data : data * 0.62137} 
            id="miles"
            placeholder="Miles"
            type="number"
            disabled={!inverted}
            onChange={onChange} 
          />
        </div>
  
        <button onClick={reset}>Reset</button>
        <button onClick={onInverted}>{inverted ? "km" : "miles"}</button>
  
      </div>
    );
} // func

export default ConvertDit;