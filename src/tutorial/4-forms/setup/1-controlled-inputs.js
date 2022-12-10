import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
 const [firstName,setFirstName] =useState('');
 const [email,setEmail] =useState('');
 const [persons,setPersons] =useState([]);
 const handleClick =(e) => {
e.preventDefault();
if(firstName && email) {
  const date = {id: new Date().getTime().toString(),firstName,email}
  setPersons((person)=>{
    return [...person, date];
  })
setFirstName('');
setEmail('');
} else {
  console.log('Oops..No value');
}
 }
 const removeItem = (id) => {
 let deleteItem = persons.filter((person) => person.id !== id);
 setPersons(deleteItem);
 }
 return (
  <>
  <article>
    <form className='form' onSubmit={handleClick}>
      <div className='form-control'>
      <label htmlFor='firstName'>
       Name : </label>
        <input 
        id='firstName'
        name='firstName'
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        />
        </div>
        <div className='form-control'>
      <label htmlFor='email'>
       Email : </label>
        <input 
        id='email'
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
        <button type='submit'>New Member</button>
        </form>
        {persons.map((person)=>{
const {id,firstName,email} = person;
return(
  <div className='item' key={id}>
  <h4>{firstName}</h4>
  <p>{email}</p>
  <button onClick={()=> removeItem(id)}>remove</button>
  </div>
)
        })}
        </article>
        </>
 
 );
};

export default ControlledInputs;
