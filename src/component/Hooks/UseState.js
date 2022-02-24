import React from "react";
import "./style.css";

const UseState = () => {
    const initialData = 0;
    const [myNum, setMyNum] = React.useState(initialData);
    console.log(initialData)
    return (
    <>
      <div className="center_div" >
        <p>{myNum}</p>
        <div class="button2" onClick = {() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOVER
        </div>
        <div
          class="button2" onClick={() => {
              if(myNum == 0)
                setMyNum(0);
              else{
                  setMyNum(myNum-1);
              }
          }}>
          {/* short hand for abv : () => myNum > 0 ? setMyName(myNum-1):setMyNum(0) */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOVER
        </div>
      </div>
    </>
  );
};

export default UseState;