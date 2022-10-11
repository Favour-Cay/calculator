import React, { Fragment } from 'react';
import './App.css';
import { useState } from 'react';
import Number from './components/Number';

function App() {
  //  const [num , setNum] = useState("");
  //  const calcBtns = [];
  //  []

  // const [val, setVal] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const synbols = ['%', 'C', '=', '/', '+', '-', '*', 'A'];

  return (
    <Fragment>
      <div className='calculator'>
        <div>
          <label
            class='switch'
            style={{ marginLeft: '18px', marginTop: '10px' }}>
            <input type='checkbox' />
            <span class='slider round'></span>
          </label>
          <h1>CALCULATOR</h1>
        </div>
        <input type='text' className='field' cellspacing='1' />
        <table>
          <tbody>
            <tr>
              <td>
                <button className='calc-button' id='zero-button'>
                  A
                </button>
              </td>
              {synbols.map(synbol => {
                if (
                  synbol === '/' ||
                  synbol === '+' ||
                  synbol === '-' ||
                  synbol === '*' ||
                  synbol === 'A'
                ) {
                  return;
                } else {
                  return <Number count={synbol} />;
                }
              })}
              {/* <Number count={'%'} />
              <Number count={'C'} />
              <Number count={'='} /> */}
            </tr>
            <tr>
              <td>
                <button className='calc-button'>7</button>
              </td>
              <td>
                <button className='calc-button'>8</button>
              </td>
              <td>
                <button className='calc-button'>9</button>
              </td>
              <td>
                <button className='calc-button'>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className='calc-button'>4</button>
              </td>
              <td>
                <button className='calc-button'>5</button>
              </td>
              <td>
                <button className='calc-button'>6</button>
              </td>
              <td>
                <button className='calc-button' value='-' onclick=''>
                  -
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button className='calc-button'>1</button>
              </td>
              <td>
                <button className='calc-button'>2</button>
              </td>
              <td>
                <button className='calc-button'>3</button>
              </td>
              <td>
                <button className='calc-button'>+</button>
              </td>
            </tr>

            <tr>
              <td>
                <button className='calc-button'>.</button>
              </td>
              <td>
                <button className='calc-button'>*</button>
              </td>
              <td colSpan='2'>
                <button
                  className='calc-button'
                  id='zero-button'
                  style={{ width: '100%' }}>
                  0
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default App;
