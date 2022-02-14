import React from "react";

export default function Joke(props) {
  return (
    <div className="jokes">
      {props.setup && <h3> Setup: {props.setup} </h3>}
      <p className="light-text"> Punchline: {props.punchline} </p>
    </div>
  );
}
