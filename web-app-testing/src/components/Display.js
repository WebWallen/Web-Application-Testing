import React from "react";

export default function Display (props) {
    return (
        <>
        <div>Strikes: {props.strikes}</div>
        <div>Balls: {props.balls}</div>
        </>
    )   
}