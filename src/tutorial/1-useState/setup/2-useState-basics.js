import React, { useState } from 'react';

const UseStateBasics = () => {
 const [note,setNote] = useState(('Random Text'));
 const handleClick = () => {
  if (note==='Random Text') {
    setNote('Ferans')
  } else {
    setNote('Random Text')
  }
 }
 return (
  <div>
  <h1>{note}</h1>
  <button className='btn' onClick={handleClick}> Change title</button>
  </div>
 );
};

export default UseStateBasics;
