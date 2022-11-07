import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = React.useState(0);
    const onClick = () => {
        setCounter(counter + 1);
    };

    return (
      <div>
          <h3>Total Click: {counter}</h3>
          <button onClick={onClick}>Click me</button>
      </div>

    );
}
export default Counter;