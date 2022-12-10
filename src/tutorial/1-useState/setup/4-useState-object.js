import React, { useState } from 'react';

const UseStateObject = () => {
  const [persons,setPersons] = useState({
    name:'Oluwaferanmi',
    age:24+'yrs old',
    message:'He is always loved by God'
  });
  const nameChanger = () => {
    setPersons({ ...persons,name:'Ayomipe'})
  }
  const ageChanger = () => {
    setPersons({ ...persons,age:25+"yrs old"})
  }
  const messageChanger = () => {
    setPersons({ ...persons,message:'Welcome Oluwaferanmi'})
  }
  return (
    <React.Fragment>
      <h1>{persons.name}</h1>
      <h1>{persons.age}</h1>
      <h1>{persons.message}</h1>
      <button className='btn' onClick={nameChanger}>Change Name</button>
      <button className='btn' onClick={ageChanger}>Change Age</button>
      <button className='btn' onClick={messageChanger}>Change Message</button>
    </React.Fragment>
  )
};

export default UseStateObject;
