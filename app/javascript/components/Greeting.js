import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getRandomGreeting from "../redux/greeting/greetingSlice";

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRandomGreeting());
    }, []);
  
  if (error) {
    return (
      <>
        <h2>Something went wront</h2>
        
      </>
    );
  }

  isLoading ? (
    "Loading...."
  ) : (
    <>
      <div>{greeting}</div>
    </>
  );
};

export default Greeting;
