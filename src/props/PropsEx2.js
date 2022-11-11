import React from "react";
import PropTypes from 'prop-types';


function Btn ({text, fontSize = 16}) {  // 폰트사이즈가 파라미터로 들어오지 않았을때 default값 설정.
    console.log(text, "랜더링 됨.");

    return (
        <button 
            style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize
        }}>
            {text}
        </button>
    );
}// func Btn

// PropType 지정 -> prop의 타입 검사, 및 여러가지 검사.
// console 상에 error log 발생.
Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number, // 이것은 확실히 존재해야만 할때 사용.
};


function PropsEx2() {

    return (
        <div>
            <Btn text="continue" fontSize={20}/>
            <Btn text="error" />
        </div>
    );
};

export default PropsEx2;