import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
//  const [people,setPeople] = React.useState(data);
//  const handleItem = (id) => {
// let newPeople= people.filter((person)=> person.id !== id) ;
//  setPeople(newPeople);

//  };
//  return (
//   <>
//   {people.map((person)=> {
// const [id,name] = person;
// return (
//   <div  key={id} className='item'>
// <h4>{name}</h4>
// <button onClick={()=> handleItem(id)}>Remove</button>
//   </div>
// );
//   })}
//   <button className='btn' onClick={() => setPeople([])}>Delete items</button>
//   </>
//  );
const [persons, setPersons] = React.useState(data);

const removeItem = (id) => {
  let newPeople = persons.filter((person) => person.id !== id);
  setPersons(newPeople);
};
return (
  <>
    {persons.map((person) => {
      const { id, name } = person;
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      );
    })}
    <button className='btn' onClick={() => setPersons([])}>
      clear items
    </button>
  </>
);


};

export default UseStateArray;
