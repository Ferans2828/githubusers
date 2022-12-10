import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow] = useState(true);


  return (
    <>
    <button className='btn'onClick={()=> setShow(!show)}>Show/Hide</button>
   {show && <Size />}
    </>
  )
  return <h2>show/hide</h2>;
};
const Size = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const checkWidth = ()=> {
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
   window.addEventListener('resize',checkWidth)
   return () =>{
    window.removeEventListener('resize',checkWidth);
   }
      },[])
  return (
    <div style={{marginTop:'2rem'}}>
      <h1>Window</h1>
      <h2>Size :{width}px</h2>
    </div>
  )
}
export default ShowHide;
