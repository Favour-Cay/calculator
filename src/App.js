import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  //  const [num , setNum] = useState("");
  //  const calcBtns = [];
  //  []

  return (
    
  
    <div className="calculator">
         <label class="switch">
    <input type="checkbox"/>
    <span class="slider round"></span>
  </label>
<h1>CALCULATOR</h1>
      <input type="text" className="field" cellspacing="1" />
      <table>
        <tbody>
          <tr>
            <td>
              <button className="calc-button" id="zero-button">A</button>
            </td>
            <td>
              <button className="calc-button">%</button>
            </td>
            <td>
              <button className="calc-button">C</button>
            </td>
            <td>
              <button className="calc-button">=</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button">7</button>
            </td>
            <td>
              <button className="calc-button">8</button>
            </td>
            <td>
              <button className="calc-button">9</button>
            </td>
            <td>
              <button className="calc-button">/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button">4</button>
            </td>
            <td>
              <button className="calc-button">5</button>
            </td>
            <td>
              <button className="calc-button">6</button>
            </td>
            <td>
              <button className="calc-button" value="-" onclick="">
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button className="calc-button">1</button>
            </td>
            <td>
              <button className="calc-button">2</button>
            </td>
            <td>
              <button className="calc-button">3</button>
            </td>
            <td>
              <button className="calc-button">+</button>
            </td>
          </tr>

          <tr>
            <td>
              <button className="calc-button">.</button>
            </td>
            <td>
              <button className="calc-button">*</button>
            </td>
            <td colSpan="2" style={{backgroundColor:'red',width:'100%'}}>
              <button className="calc-button" id="zero-button">0</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
