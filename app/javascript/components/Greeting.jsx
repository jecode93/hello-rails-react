import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);
  
  if (error) {
    return (
      <>
        <h2>Something went wront</h2>
        <p>{ error }</p>
      </>
    )  
  }
  
  isLoading ? 'Loading....' : (
    <>
       <div>{ greeting }</div>
    </>
  );
}

export default Greeting;