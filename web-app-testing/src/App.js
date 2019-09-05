import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

export default function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const scoreStrike = () => {
    if (strikes === 2) setStrikes(0) || setBalls(0);
    else setStrikes(strikes + 1);
  }

  const scoreBall = () => {
    if (balls === 3) setBalls(0) || setStrikes(0);
    else setBalls(balls + 1);
  }

  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  }

  const scoreFoul = () => {
    if (strikes !== 2) setStrikes(strikes + 1);
    else setStrikes(0) || setBalls(0);
  }
    
  return (
        <>
        <Display strikes={strikes} balls={balls} />
        <Dashboard strikes={scoreStrike} balls={scoreBall} hits={scoreHit} fouls={scoreFoul} />
        </>
    )
}