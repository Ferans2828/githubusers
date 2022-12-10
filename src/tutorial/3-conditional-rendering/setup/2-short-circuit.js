import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  // const firstValue = value || 'hello world';
  // const secondValue = value && 'hello world';

  return (
  <>
  <h1>{value||'Oluwaferanmi'}</h1>
  <button className='btn' onClick={()=> setError(!error)}>TOGGLE NAME</button>
  {!error && <h1>Error...</h1>}
  {!error?<p>There is error</p>:<h1>Welcome</h1>}
  {/* {!value && <h1>Hi Coder</h1>} */}
  </>
  )
};

export default ShortCircuit;
