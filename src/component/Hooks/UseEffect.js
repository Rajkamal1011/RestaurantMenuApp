import React, { useEffect } from "react";
import "./style.css";

const UseEffect = () => {
    // const initialData = 0;
    const [myNum, setMyNum] = React.useState(0);
    // console.log(initialData)
    useEffect(()=>{
        document.title =  `MyCounter(${myNum})`;
    })
    // after adding array dependency it doesn't always run i.e. the function isn't always executed
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
      </div>
    </>
  );
};

export default UseEffect;