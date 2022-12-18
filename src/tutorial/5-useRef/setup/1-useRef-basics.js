import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refMain = useRef('null');
 
const handleForm = (e) => {
e.preventDefault();
console.log(refMain.current.value)
}
return (
  <>
  <form className='form' onSubmit={handleForm}>
    <input type='text' ref={refMain} />
    <button type='submit'>Submit</button>
    </form></>
)
};

export default UseRefBasics;
