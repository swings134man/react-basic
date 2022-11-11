import React, { useState } from "react";

function KmToMile() {
  const [data, setData] = React.useState(0);
  const [status, setStatus] = React.useState(false);

  const onChange = (event) => {
    setData(event.target.value);
  };
  const reset = () => {
    setData(0);
  };
  const change = () => {
    reset();
    setStatus((current) => !current);
  }


  return (
    <div>
      <h1>Km To Mile Test</h1>

      <div>
        <label htmlFor="km">Km</label>
        <input
          id="km"
          placeholder="Km"
          type="number"
          value={status ? data / 0.62137 : data}
          onChange={onChange}
          disabled={status} //default = false 
        />
      </div>

      <div>
        <label htmlFor="mile">Mile</label>
        <input
          id="mile"
          placeholder="mile"
          type="number"
          value={!status ? data * 0.62137 : data}
          onChange={onChange}
          disabled={!status} //default = true 
        />
      </div>

     <button onClick={reset}>reset</button>
     <button onClick={change}>값 변경</button>

    </div>
  );
}

export default KmToMile;
