//react functional components
//import -> librery,const,mathods,controllers,modules
//1.default import ->modules.librery
//2.const import->const,methods,controlles,librery(typed/named){}
import React from "react"
import "./App.css"
import Home from "./component/Home"
import Contact from "./component/contact"

//compnent body(jsx)
function App(props){
  return(
    <div>
      <h1 className="title">React Functional components</h1>
      <Home/>
      <Contact/>
    </div>
  )
}

//export=>default
export default App