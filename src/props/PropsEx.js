import React from "react";

function Btn (props) { // props 대신 {banana} 로 받으면 아래에서 banana로 바로 접근 가능 (props는 Obj)
    console.log(props.text, "랜더링 됨.");

    return (
        <button 
            onClick={props.changeValue}
            style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
        }}>
            {props.text}
        </button>
    );
}

const MemorizedBtn = React.memo(Btn);

function PropsEx() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");


    return (
        // 1. 버튼 클릭시 return 안에 모든것이 re-rendering 된다.
        // 실제 이벤트는 <button> func 내부에 설정.

        //2.  하지만 변경이 되지 않는 아래부분은 re -rendering 되지않아 효율성 증대함.
        // --> 아래의 props가 변경되지 않는다면 ? -> rendering 필요가 없음을 알려주는것임.  
        <div>
        <MemorizedBtn text={value} changeValue ={changeValue}/> 
        <MemorizedBtn text="Continue"/> 
        </div>

    );
}

export default PropsEx;
