import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width,setWidth] = useState(window.innerWidth);
  console.log(width);
  const checkResize = ()=> {
setWidth(window.innerWidth);
  };
  useEffect(()=> {
    window.addEventListener('resize',checkResize)
  })
  return (
    <div>
      <h1>Window width</h1>
      <h2>{width}px</h2>
    </div>
  )
};

export default UseEffectCleanup;
