import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('Default user');
  useEffect(()=>{
fetch(url).then((resp)=>{
if(resp.status >=200 && resp.status <=299) {
  return resp.json();
} else {
  setCheck(true);
  setError(true);
  throw new Error(resp.statusText);
}
})
.then((user) => {
const {html_url} = user;
setUser(html_url);
setCheck(true);
})

  },[])
  if(check) {
    return (
    <div>
      <h2>Checking....</h2>
      </div>
    );
  }
  if(error) {
    return (
    <div>
      <h2>Finding Error....</h2>
      </div>
    );
  }
  return (
    <div>
  {user}
  </div>
  );
};

export default MultipleReturns;
