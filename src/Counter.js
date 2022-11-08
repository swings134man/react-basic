import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = React.useState(0);
    const onClick = () => {
        // setCounter(counter + 1);
        // (state 값 => 함수)
        setCounter((current) => current +1); // 현재값에 업데이트 더좋은방법임

    };

    function Btn() {

    }

    return (
      <div>
          <h3>Total Click: {counter}</h3>
          <button onClick={onClick}>Click me</button>
      </div>
    );
}
export default Counter;