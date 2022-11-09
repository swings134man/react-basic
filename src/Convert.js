import React, { useState } from "react";

function Convert() {
  // state는 array 로 제공. 첫번째요소는 데이터, 두번쨰 요소는 데이터를 수정하기 위한 함수.
  const [minutes, setMinutes] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false); // 기본값 false 지정.

  const onChange = (event) => {
    // event 안에는 onChange로 바뀐 결과들과 여러 요소가 포함됨.
    setMinutes(event.target.value);
    // console.log(event.target.value);
  };
  const reset = () => setMinutes(0);
  const onFlip = () => setFlipped((current) => !current); //(클릭시.) false <-> true 변경.

  

  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped === true}
        />
        <h4>You Want to convert {minutes}</h4>
      </div>

      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={flipped === false}
        />
      </div>

      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>뒤집기</button>

    </div>
  );
} //function

export default Convert;
