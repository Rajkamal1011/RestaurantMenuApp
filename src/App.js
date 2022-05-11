// import React from 'react'

import React from "react"
import Restaurant from "./component/Basics/Restaurant";
import UseState from "./component/Hooks/UseState";
import UseEffect from "./component/Hooks/UseEffect";
import UseReducer from "./component/Hooks/UseReducer";
import Navbar from "./component/Basics/Navbar";


const App = ()=>{
  return (
    <>
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseState/> */}
      <Restaurant/>
      {/* <MyName/>
      <MyName/>
      <h1 className="myclassname">Hello world!!{3+3}</h1>
      <p>Awesome</p>
      <img src="" alt=""></img> */}
      
    </>
  );
}

const MyName = ()=>{
  return (
    <div>
      <h2>Rajkamal Rajendra ingle</h2>
      {/* <App/> */}
    </div>
    
  )
}
//How react sees above code snippet i.e. App functional component:
// const App = ()=>{
//   return React.createElement("h1",{},"Hwllo world")
// }

//instead of div, we can also use section,article as parent element,but preferred one is: React.Fragment
//syntactic sugar of <React.Fragment> </React.Fragment> is <> </>

//in html we had an attribute class, especially useful when want to apply css on similar elements i.e. those with same class
//class keyword is already reserved in React, hence, use className

//JSX looks like HTML, but we can use javascript inside it, by using curly braces eg {3+3}
//It is called "functional component"
export default App
