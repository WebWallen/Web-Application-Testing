import React from "react";
import "@testing-library/react";
import Display from "./Display";
import { render } from "@testing-library/react";

test('Display renders without crashing', () => {
    render(<Display />);
})