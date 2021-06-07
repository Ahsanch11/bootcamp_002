//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Messsage from "./components/Message";

function App() {
  let [isMorning, setMorning] = useState(true);
  let [count , setCount] = useState(0);

  return (
    <div className={isMorning ? "App" : "App black"}>
      <h1>Good {isMorning ? "Morning" : "Night"} </h1>
      <button 
      onClick={ () => { 
          setMorning(!isMorning) 
         }
        }>
        Change day
        </button>


        <Messsage counter = {count} />

      <button onClick= { ()=> setCount(count++) } >
        update count
      </button>
     
    </div>
  );
}

export default App;

