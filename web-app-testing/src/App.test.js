import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App"; // note to self: F2 lets you find and replace all occurences of a word in the file
import { testNameToKey } from "jest-snapshot/build/utils";

describe('<Display />', () => {
    
  test('renders without crashing', () => {
    render(<App />);
  });

  test('Test all the things', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    // confirm strikes are registering to scoreboard
    fireEvent.click(strike);
    fireEvent.click(strike);
    getByText(/Strikes: 2/);
    
    // confirm count rolls back to zero after strike out
    fireEvent.click(strike);
    getByText(/Strikes: 0/);

    // confirm balls are registering to scoreboard
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 3/);

    // confirm count rolls back to zero after batter walks
    fireEvent.click(ball);
    getByText(/Balls: 0/);

    // confirm foul registers as a strike
    fireEvent.click(foul);
    fireEvent.click(foul);
    getByText(/Strikes: 2/);

    // confirm a foul with two strikes results in an out
    fireEvent.click(foul);
    getByText(/Strikes: 0/);

    // confirm a hit resets the scoreboard count to zero
    fireEvent.click(strike);
    fireEvent.click(ball);
    fireEvent.click(foul);
    fireEvent.click(hit);
    getByText(/Strikes: 0/);
    getByText(/Balls: 0/);
  })
})