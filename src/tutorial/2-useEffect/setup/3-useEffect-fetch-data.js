import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [customers,setCustomers] = useState([]);
  const userHandle = async () => {
    const repo = await fetch(url);
    const customer = await repo.json();
    setCustomers(customer);
  }
  useEffect(()=>{
userHandle();

  },[])
  return(
    <>
    <h3>Github users</h3>
    
    
      
      <ul className='users'>
{customers.map((customer)=> {
const {id,login,avatar_url,html_url} = customer;
return <li key={id}>
  <img src={avatar_url} alt={login}></img>
  <div>
  <h4>{login}</h4>
  <a href={html_url}>Profile</a>
  </div>
</li>
})}
      </ul>
      </>
    )
  
};

export default UseEffectFetchData;
