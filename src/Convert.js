import React, { useState } from "react";

function Convert() {
  // state는 array 로 제공. 첫번째요소는 데이터, 두번쨰 요소는 데이터를 수정하기 위한 함수.
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false); // 기본값 false 지정.

  const onChange = (event) => {
    // event 안에는 onChange로 바뀐 결과들과 여러 요소가 포함됨.
    setAmount(event.target.value);
    // console.log(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInverted = () => {
    reset();
    setInverted((current) => !current);
  } //(클릭시.) false <-> true 변경.

  

  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount*60 : amount }
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
        <h4>You Want to convert {amount}</h4>
      </div>

      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)} // if filipped(false) 라면 minute, 아니면 계산.
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!inverted}
          onChange={onChange} 
        />
      </div>

      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>{inverted ? "Minutes" : "Hours"}</button>

    </div>
  );
} //function

export default Convert;
