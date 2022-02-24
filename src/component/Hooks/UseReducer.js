import React, { useReducer } from "react";
import "./style.css";

const reducer = (state,action) =>{
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(action.type == "DCR" && state > 0){
        state = state - 1
    }
    return state;
}

const UseReducer = () => {
    // const [myNum, setMyNum] = React.useState(0);
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);
    // dispatch method is used to trigger reducer function
    return (
    <>
      <div className="center_div" >
        <p>{state}</p>
            <div class="button2" onClick = {() => dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() => dispatch({type:"DCR"})}>
          {/* short hand for abv : () => myNum > 0 ? setMyName(myNum-1):setMyNum(0) */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DCR
        </div>
      </div>
    </>
  );
};

export default UseReducer;