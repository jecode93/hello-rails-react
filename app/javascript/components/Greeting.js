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
  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    )
  }
  
   return (
     <>
       <h1>Greeting from the API</h1>
       <h3>{ greeting }</h3>
    </>
  );
}

export default Greeting;