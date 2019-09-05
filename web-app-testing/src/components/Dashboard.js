import React from "react";

export default function Dashboard (props) {
    return (
        <div>
            <button onClick={props.strikes}>Strike</button>
            <button onClick={props.balls}>Ball</button>
            <button onClick={props.fouls}>Foul</button>
            <button onClick={props.hits}>Hit</button>
        </div>
    )
}