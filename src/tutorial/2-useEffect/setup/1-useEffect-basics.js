import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [number,setNumber] = useState(0);
  
  useEffect(()=> {
    if(number >= 1) {
      document.title=`New messages(${number})`;
     }
    },[number]);
  console.log('render component');
  return (
<>
<h1>{number}</h1>
<button className='btn' onClick={() => setNumber(number+1)}>Click for new message</button></>
  );
  
};

export default UseEffectBasics;
