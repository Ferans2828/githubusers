import React, { useState } from 'react';

const UseStateCounter = () => {
  const [figure,setFigure] = useState(0);
const reset = () =>{
  setFigure(0);
}
  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1 style={{margin:'1rem 0'}}>{figure}</h1>
    <button className='btn' onClick={()=> setFigure(figure + 1)}>Increase</button>
    <button className='btn' onClick={reset}>Reset</button>
    <button className='btn' onClick={() => setFigure(figure - 1)}>Decrease</button>
    </section></>
};

export default UseStateCounter;
