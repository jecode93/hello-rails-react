import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from './Greeting';
import { useDispatch } from 'react-redux';
import getRandomGreeting from '../redux/greeting/greetingSlice'

const App = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;