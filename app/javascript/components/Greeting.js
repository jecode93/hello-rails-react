import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRandomGreeting } from "../redux/greeting/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector(
    (state) => state.greetings
  );

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);
  
  if (error) {
    return (
      <>
        <h2>Something went wront</h2>
        {error}
      </>
    );
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
      <div>
        <h1>Greetings from the back end</h1>
        <h2>{greeting.message}</h2>
      </div>
    </>
  );
};

export default Greeting;
