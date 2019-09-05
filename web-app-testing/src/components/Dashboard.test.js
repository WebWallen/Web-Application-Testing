import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { scoreStrike, scoreBall, scoreHit, scoreFoul } from "../App";

test('Dashboard renders without crashing', () => {
    render(<Dashboard />);
})