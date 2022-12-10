import React from 'react';

const ErrorExample = () => {
  let title='Random title';
  const handleTitle = () => {
  
    title='HELLO PEOPLE';
    console.log(title)
  }
  return (
<React.Fragment>
  <h2>{title}</h2>
  <button className='btn' onClick={ handleTitle}>Change title</button>
</React.Fragment>
  );


  
};

export default ErrorExample;
